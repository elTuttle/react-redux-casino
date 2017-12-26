class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.array :player_hand
      t.array :dealer_hand

      t.timestamps
    end
  end
end
