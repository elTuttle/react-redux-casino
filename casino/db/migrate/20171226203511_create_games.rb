class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :player_hand_one
      t.integer :player_hand_two
      t.integer :dealer_hand_one
      t.integer :dealer_hand_two

      t.timestamps
    end
  end
end
