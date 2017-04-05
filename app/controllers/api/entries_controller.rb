class Api::EntriesController < ApplicationController

  def new
  end

  def create
    @entry = Entry.new(entry_params)
    if @entry.save
      # @months = ActiveRecord::Base.connection.execute("SELECT date_trunc('month', date) AS month, SUM(amount) as total_amount
      # FROM entries
      # GROUP BY date_trunc('month', date)
      # ORDER BY date_trunc('month', date)")
      render 'api/months/index'
    else
      render(
      json: @entry.errors.full_messages, status: 422
      )
    end
  end

  def index
    @entries = Entry.all
  end

  def show
    # @entry = Entry.includes(:name, :amount, :date).find(params[:id])
    # @entries = Entry.where(date: (Time.now.midnight - 1.day)..Time.now.midnight)
    @entries = Entry.where(date: (Time.now.beginning_of_month)..Time.now.end_of_month)
  end

  private

  def entry_params
    params.require(:entry).permit(:name, :amount, :date)
  end
end
