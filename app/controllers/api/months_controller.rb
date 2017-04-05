class Api::MonthsController < ApplicationController

  def index

    # @months = Entry.sum_months
    @months = ActiveRecord::Base.connection.execute("SELECT date_trunc('month', date) AS month, SUM(amount) as total_amount
    FROM entries
    GROUP BY date_trunc('month', date)
    ORDER BY date_trunc('month', date)")
    render :index
  end

  def show
    # @entry = Entry.includes(:name, :amount, :date).find(params[:id])
    # @entries = Entry.where(date: (Time.now.midnight - 1.day)..Time.now.midnight)
    @entry = Entry.find(:all,
             :select => "SUM(amount) as total_amount, MONTH(date) as month, YEAR(date) as year",
             :group => "MONTH(date), YEAR(date)" )
  end

  # private
  #
  # def entry_params
  #   params.require(:entry).permit(:name, :amount, :date)
  # end
end


# @entries = Entry.where(date: (Time.now.beginning_of_month - 1.day)..Time.now.end_of_month)
