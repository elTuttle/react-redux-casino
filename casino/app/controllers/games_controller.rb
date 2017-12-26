class GamesController < ApplicationController

  def create

    loop do
      loop do
        player_hand = [rand(52),rand(52)]
        break if player_hand[0] != player_hand[1]
      end

      loop do
        dealer_hand = [rand(52),rand(52)]
        break if dealer_hand[0] != dealer_hand[1]
      end

      break if dealer_hand[0] != player_hand [0] && dealer_hand[0] != player_hand[1] && dealer_hand[1] != player_hand [0] && dealer_hand[1] != player_hand[1]
    end

    @game = Game.new(player_hand: player_hand, dealer_hand: dealer_hand)

    if @game.save
      render json: @game, status: 201
    end

  end

end
