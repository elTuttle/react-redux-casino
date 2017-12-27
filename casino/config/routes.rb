Rails.application.routes.draw do
  resources :games, only: [:new, :show]
  get 'games/:id/hit', to: 'games#hit' #hit page to get JSON for player or dealer hit
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
