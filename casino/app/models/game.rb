class Game < ActiveRecord::Base
  has_many :cards

  def current_cards
    cards_array = []
    self.cards.each do |card|
      cards_array << card.value
    end
    cards_array
  end

end
