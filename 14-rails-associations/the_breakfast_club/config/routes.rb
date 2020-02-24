Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cereals, only: [:index, :show, :new, :create, :edit, :update]

  # INDEX ROUTe
  # get '/cereals', to: 'cereals#index', as: 'cereals'

  get "/cereals/:id/edit", to: "cereals#edit"
  # patch "/cereals/:id", to: "cereals#update"

  get "/cereals/:id", to: "cereals#show"
  
end
