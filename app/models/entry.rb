class Entry < ApplicationRecord
  validates :name, :amount, :date, presence: true

  def self.sum_months
    query = <<-SQL
      SELECT date_trunc('month', date) AS month, SUM(amount) as total_amount
      FROM entries
      GROUP BY date_trunc('month', date)
      ORDER BY date_trunc('month', date)
    SQL

    self.find_by_sql(query)
	end
end
