Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :movies, :users, :reviews

      post "/signup", to: "users#create"
      post "/login", to: "auth#login"
      post "/movies/:id/reviews", to: "movies#review"

      get "/auto_login", to: "auth#auto_login"
      # delete "/reviews/:id" to "reviews#destroy"

      
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
