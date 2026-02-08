defmodule DurationFormatter do
  @moduledoc false

  @one_minute 60
  @one_hour 60 * @one_minute
  @one_day 24 * @one_hour
  @one_month 30 * @one_day
  @one_year 12 * @one_month

  # Lista de {segundos, {singular, plural}}
  @units [
    {@one_year, {"ano", "anos"}},
    {@one_month, {"mês", "meses"}},
    {@one_day, {"dia", "dias"}},
    {@one_hour, {"hora", "horas"}},
    {@one_minute, {"minuto", "minutos"}},
    {1, {"segundo", "segundos"}}
  ]

  @doc """
  ----------------------------------------------------------------------------
  format_duration

  iex> format_duration(0)
  "0 segundos"

  iex> format_duration(1)
  "1 segundo"

  iex> format_duration(-5)
  "0 segundos"

  iex> format_duration(10)
  "10 segundos"

  iex> format_duration(60)
  "1 minuto"

  iex> format_duration(300)
  "5 minutos"

  iex> format_duration(630)
  "10 minutos e 30 segundos"

  iex> format_duration(11947)
  "3 horas, 19 minutos e 7 segundos"

  iex> format_duration(962347)
  "11 dias, 3 horas, 19 minutos e 7 segundos"

  iex> format_duration(13922347)
  "5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"

  iex> format_duration(45026347)
  "1 ano, 5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"

  ----------------------------------------------------------------------------
  """
  @spec format_duration(integer()) :: String.t()
  def format_duration(duration) when duration <= 0, do: zero_case()

  def format_duration(duration) do
    parts = duration |> build_parts([]) |> Enum.reverse()

    case parts do
      [] ->
        zero_case()

      [only] ->
        only

      _ ->
        {initial, [last]} = Enum.split(parts, -1)
        Enum.join(initial, ", ") <> " e " <> last
    end
  end

  # Garante que 0 e negativos viram "0 segundos"
  defp zero_case, do: "0 segundos"

  # Recursão que vai quebrando duration em unidades
  @spec build_parts(non_neg_integer(), [String.t()]) :: [String.t()]
  defp build_parts(0, acc), do: acc

  defp build_parts(rem_seconds, acc) do
    {unit_sec, {singular, plural}} =
      Enum.find(@units, fn {unit, _names} -> rem_seconds >= unit end)

    count = div(rem_seconds, unit_sec)
    leftover = rem(rem_seconds, unit_sec)
    name = if count == 1, do: singular, else: plural
    part = "#{count} #{name}"

    build_parts(leftover, [part | acc])
  end
end
