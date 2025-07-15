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
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{@title}</h5>
        <p class="mb-3 font-normal text-gray-700">{@artist}</p>
      </div>
    </div>
    """
  end

  attr(:pause_on_hover, :boolean, default: false, doc: "Pause on hover")
  attr(:repeat, :integer, default: 4, doc: "Number of repeats")
  attr(:vertical, :boolean, default: false, doc: "Vertical")
  attr(:reverse, :boolean, default: false, doc: "Reverse")
  attr(:class, :string, default: "", doc: "CSS class for parent div")

  attr(:rest, :global)

  slot(:inner_block, required: true)

  def marquee(assigns) do
    ~H"""
    <div
      :if={@repeat > 0}
      class={[
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        @vertical && "flex-col",
        !@vertical && "flex-row",
        @class
      ]}
      {@rest}
    >
      <%= for _ <- 0..(@repeat - 1) do %>
        <div
          class={[
            "flex shrink-0 justify-around [gap:var(--gap)]",
            @vertical && "animate-marquee-vertical flex-col",
            !@vertical && "animate-marquee flex-row",
            @pause_on_hover && "group-hover:[animation-play-state:paused]"
          ]}
          style={@reverse && "animation-direction: reverse;"}
        >
          {render_slot(@inner_block)}
        </div>
        &nbsp;
      <% end %>
    </div>
    """
  end

  # attr :message, :string, required: true
  # def marquee(assigns) do
  #   ~H"""
  #   <style>
  #     .marquee-container {
  #       color: white;
  #       font-size: 8rem;
  #       height: 100%;
  #       overflow: hidden;
  #       line-height: 120%;
  #       .marquee {
  #         top: 0;
  #         left: 100%;
  #         width: 100%;
  #         overflow: hidden;
  #         position: absolute;
  #         white-space: nowrap;
  #         animation: marquee 30s linear infinite;
  #       }
  #       .marquee2 { animation-delay: 15s; }
  #       b { padding-left: 10px; }
  #     }
  #
  #     @keyframes marquee {
  #       0% { left: 100%; }
  #       100% { left: -100%; }
  #     }
  #   </style>
  #
  #   <div class="position-relative marquee-container d-none d-sm-block">
  #     <div class="marquee d-flex justify-content-around">
  #       <%= @message %>
  #     </div>
  #     <div class="marquee marquee2 d-flex justify-content-around">
  #       <%= @message %>
  #     </div>
  #   </div>
  #   """
  # end
end
