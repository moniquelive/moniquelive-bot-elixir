defmodule WebAppWeb.LayerControllerTest do
  @moduledoc false
  use WebAppWeb.ConnCase

  setup do
    start_supervised!(WebAppWeb.Endpoint)
    :ok
  end

  test "GET /layer", %{conn: conn} do
    conn = get(conn, "/layer")
    assert html_response(conn, 200) =~ "MoniqueLive Bot"
  end
end
