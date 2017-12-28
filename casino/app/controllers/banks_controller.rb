class BanksController < ApplicationController

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
