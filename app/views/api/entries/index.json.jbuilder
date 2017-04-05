@entries.each do |entry|
  json.set! entry.id do
    json.partial! "api/entries/entries", entry: entry
  end
end
