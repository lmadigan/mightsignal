class RemoveIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index(:entires, name: 'index_entries_on_name')
  end
end
