# https://virviil.github.io/2016/10/26/elixir-testing-without-starting-supervision-tree/

Application.load(:chatbot)

for app <- Application.spec(:chatbot, :applications),
    do: Application.ensure_all_started(app)

ExUnit.start()
