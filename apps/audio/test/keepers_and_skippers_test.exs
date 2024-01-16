defmodule Audio.KeepersAndSkippersTest do
  use ExUnit.Case, async: true

  @name __MODULE__

  alias Audio.KeepersAndSkippers, as: KS

  setup do
    start_supervised!({Audio.KeepersAndSkippers, name: @name})
    :ok
  end

  test "empty initial state" do
    assert KS.keepers(@name) == MapSet.new()
    assert KS.skippers(@name) == MapSet.new()
  end

  test "one keeper" do
    KS.keep("keeper", @name)
    assert KS.keepers(@name) == MapSet.new(["keeper"])
  end

  test "`!keep` response" do
    KS.keep("keeper", @name)
    assert KS.keep_response(@name) == "kumaPls parciais: (vaza: 0 X fica: 1)"
  end

  test "one skipper" do
    KS.skip("skipper", @name)
    assert KS.skippers(@name) == MapSet.new(["skipper"])
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
  end

  test "resetting" do
    KS.keep("keeper", @name)
    KS.skip("skipper", @name)
    KS.reset(@name)
    assert KS.keepers(@name) == MapSet.new()
    assert KS.skippers(@name) == MapSet.new()
  end
end
