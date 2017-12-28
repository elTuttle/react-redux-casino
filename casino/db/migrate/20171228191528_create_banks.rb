class CreateBanks < ActiveRecord::Migration[5.1]
  def change
    create_table :banks do |t|
      t.integer :value

      t.timestamps
    end
  end
end
