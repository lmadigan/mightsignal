class CreateEntryTable < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.string :name, null: false
      t.decimal :amount, null: false
      t.date :date, null: false
    end
    add_index :entries, :name, unique: true
  end
end
