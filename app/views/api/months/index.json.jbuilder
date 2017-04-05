# @months.each do |month|
#   debugger
#   json.set! month.month do
#     json.extract! :total_amount
#   end
# end

json.month @months
