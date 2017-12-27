class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.integer :value
      t.integer :score_value

      t.timestamps
    end
  end
end
