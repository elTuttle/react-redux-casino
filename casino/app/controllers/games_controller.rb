class GamesController < ApplicationController

  def new
    
    player_hand = [rand(52),rand(52)]
    dealer_hand = [rand(52),rand(52)]

    while player_hand[0] == player_hand[1] || dealer_hand[0] == dealer_hand[1] || dealer_hand[0] == player_hand[0] || dealer_hand[0] == player_hand[1] || dealer_hand[1] == player_hand[0] || dealer_hand[1] == player_hand[1]
      player_hand = [rand(52),rand(52)]
      dealer_hand = [rand(52),rand(52)]
    end

    @game = Game.new(player_hand_one: player_hand[0], player_hand_two: player_hand[1], dealer_hand_one: dealer_hand[0], dealer_hand_two: dealer_hand[1])

    if @game.save
      redirect_to game_path(@game)
    end
  end

  def show
    @game = Game.find(params[:id])
    render json: @game, status: 201
  end

end
