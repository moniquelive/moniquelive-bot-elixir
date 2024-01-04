defmodule WebAppWeb.LayerController do
  use WebAppWeb, :controller

  plug :put_root_layout, {WebAppWeb.Layouts, :layers}

  def index(conn, _params) do
    render(conn, :index)
  end
end
