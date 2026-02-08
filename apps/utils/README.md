# Utils

Small shared helpers used across the umbrella apps.

## Usage

### Word wrapping

`Utils.word_wrap/2` splits text into lines based on a max width. Whitespace is
normalized, and non-positive widths return a single line.

```elixir
Utils.word_wrap("abc def ghi", 7)
# => ["abc def", "ghi"]

Utils.word_wrap("abc   def", 0)
# => ["abc def"]
```

### Duration formatting

`DurationFormatter.format_duration/1` turns seconds into a human-readable
string in Portuguese. Negative values clamp to zero.

```elixir
DurationFormatter.format_duration(630)
# => "10 minutos e 30 segundos"

DurationFormatter.format_duration(-5)
# => "0 segundos"
```
