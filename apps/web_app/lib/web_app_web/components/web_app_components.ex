defmodule WebAppWeb.WebAppComponents do
  @moduledoc false

  use Phoenix.Component

  attr :title, :string, required: true
  attr :artist, :string, required: true
  attr :cover, :string, required: true

  def music(assigns) do
    ~H"""
    <div class="grid grid-rows-2 grid-flow-col">
      <img class="row-span-2 w-48" id="coverImg" src={@cover} alt="Album Cover" />
      <div class=""><%= @title %></div>
      <div class=""><%= @artist %></div>
    </div>
    """
  end
end
