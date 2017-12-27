class GamesController < ApplicationController

  def new

    player_hand = [rand(51),rand(51)]
    dealer_hand = [rand(51),rand(51)]

    while player_hand[0] == player_hand[1] || dealer_hand[0] == dealer_hand[1] || dealer_hand[0] == player_hand[0] || dealer_hand[0] == player_hand[1] || dealer_hand[1] == player_hand[0] || dealer_hand[1] == player_hand[1]
      player_hand = [rand(51),rand(51)]
      dealer_hand = [rand(51),rand(51)]
    end

    @game = Game.new(player_hand_one: player_hand[0], player_hand_two: player_hand[1], dealer_hand_one: dealer_hand[0], dealer_hand_two: dealer_hand[1])

    @game.cards.build(value: player_hand[0])
    @game.cards.build(value: player_hand[1])
    @game.cards.build(value: dealer_hand[0])
    @game.cards.build(value: dealer_hand[1])

    if @game.save
      redirect_to game_path(@game)
    end
  end

  def show
    @game = Game.find(params[:id])
    render json: @game, status: 201
  end

  def hit
    @game = Game.find(params[:id])
    new_card = rand(52).to_i
    binding.pry
    while @game.current_cards.include?(new_card)
      new_card = rand(52).to_i
    end
    render json: new_card
  end

end
