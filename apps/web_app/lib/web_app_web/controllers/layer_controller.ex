defmodule WebAppWeb.LayerController do
  use WebAppWeb, :controller

  plug :put_root_layout, {WebAppWeb.LayoutView, :layer}

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
