class BanksController < ApplicationController

  def show
    @bank = Bank.find_by(id: 1)
    if !@bank
      @bank = Bank.create(id: 1, value: 100)
    end
    render json: @bank, status: 200
  end

  def update
    @bank = Bank.find(params[:id])
    binding.pry
  end

end
