defmodule WebAppWeb.WebAppComponents do
  @moduledoc false

  use Phoenix.Component

  attr :title, :string, required: true
  attr :artist, :string, required: true
  attr :cover, :string, required: true

  def music(assigns) do
    ~H"""
    <div class="flex flex-col items-center mx-auto border border-gray-300 bg-stone-200 rounded-lg shadow-md md:flex-row md:max-w-fit">
      <img
        class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={@cover}
        alt="Album Cover"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><%= @title %></h5>
        <p class="mb-3 font-normal text-gray-700"><%= @artist %></p>
      </div>
    </div>
    """
  end
end
