class GamesController < ApplicationController

  def index
    @games = Game.all.limit(20)
    render json: @games, status: 200
  end

  def new

    player_hand = [rand(51),rand(51)] #get random numbers for player hand
    dealer_hand = [rand(51),rand(51)] #get random numbers for dealer hand

    #until ever card is different, keep making new hands
    while player_hand[0] == player_hand[1] || dealer_hand[0] == dealer_hand[1] || dealer_hand[0] == player_hand[0] || dealer_hand[0] == player_hand[1] || dealer_hand[1] == player_hand[0] || dealer_hand[1] == player_hand[1]
      player_hand = [rand(51),rand(51)]
      dealer_hand = [rand(51),rand(51)]
    end

    #build game with initial hand values
    @game = Game.new(player_hand_one: player_hand[0], player_hand_two: player_hand[1], dealer_hand_one: dealer_hand[0], dealer_hand_two: dealer_hand[1])

    #build cards that belong to game out of initial hand values
    @game.cards.build(value: player_hand[0])
    @game.cards.build(value: player_hand[1])
    @game.cards.build(value: dealer_hand[0])
    @game.cards.build(value: dealer_hand[1])

    #if it works, redirect to game show page
    if @game.save
      redirect_to game_path(@game)
    end
  end

  def show
    #find the game by id and display it's JSON
    @game = Game.find(params[:id])
    render json: @game, status: 201
  end

  def hit
    @game = Game.find(params[:id]) #find game by id
    new_card = rand(52).to_i
    while @game.current_cards.include?(new_card) #until the new card is one not already in use, keep changing it's value
      new_card = rand(52).to_i
    end
    @game.cards.build(value: new_card) #build card out of new_card value and make it belong to certain game
    render json: new_card #render JSON of new card
  end

end
