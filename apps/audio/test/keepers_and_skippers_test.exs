defmodule Audio.KeepersAndSkippersTest do
  use ExUnit.Case, async: false

  @name __MODULE__

  alias Audio.KeepersAndSkippers, as: KS

  setup_all do
    ensure_pubsub_started()
    :ok
  end

  setup do
    Audio.Spotify.Client.Test.reset()
    start_supervised!({Audio.KeepersAndSkippers, name: @name})
    :ok
  end

  test "empty initial state" do
    assert KS.keepers(@name) == MapSet.new()
    assert KS.skippers(@name) == MapSet.new()
  end

  test "resetting" do
    KS.keep("keeper", @name)
    KS.skip("skipper", @name)
    KS.reset(@name)
    assert KS.keepers(@name) == MapSet.new()
    assert KS.skippers(@name) == MapSet.new()
  end

  describe "keepers" do
    test "one keeper" do
      KS.keep("keeper", @name)
      assert KS.keepers(@name) == MapSet.new(["keeper"])
      assert KS.skippers(@name) == MapSet.new()
    end

    test "`!keep` response" do
      KS.keep("keeper", @name)
      assert KS.keep_response(@name) == "kumaPls parciais: (vaza: 0 X fica: 1)"
    end
  end

  describe "skippers" do
    test "one skipper" do
      KS.skip("skipper", @name)
      assert KS.skippers(@name) == MapSet.new(["skipper"])
      assert KS.keepers(@name) == MapSet.new()
    end

    test "`!skip` partial response" do
      KS.keep("keeper", @name)
      KS.skip("skipper", @name)
      assert KS.skip_response(nil, @name) == "Aaaaa parciais: (vaza: 1 X fica: 1)"
    end

    test "`!skip` finished response" do
      creds = %Spotify.Credentials{}
      1..5 |> Enum.map(&Kernel.to_string/1) |> Enum.each(&KS.skip(&1, @name))
      assert KS.skip_response(creds, @name) == "PULANDO!!!! 💃 (1,2,3,4,5) X ()"
      assert [{:skip_to_next, ^creds} | _] = Audio.Spotify.Client.Test.calls()
    end
  end

  test "broadcast publishes keepers and skippers" do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "spotify:keepers_and_skippers_changed")

    KS.keep("keeper", @name)
    KS.skip("skipper", @name)
    KS.broadcast(@name)

    assert_receive %{keepers: keepers, skippers: skippers}
    assert MapSet.new(keepers) == MapSet.new(["keeper"])
    assert MapSet.new(skippers) == MapSet.new(["skipper"])
  end

  defp ensure_pubsub_started do
    case Process.whereis(WebApp.PubSub) do
      nil -> start_supervised!({Phoenix.PubSub, name: WebApp.PubSub})
      _pid -> :ok
    end
  end
end
