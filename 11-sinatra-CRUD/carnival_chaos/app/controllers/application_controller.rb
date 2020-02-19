require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

# INDEX action
  get '/carnivals' do
    @carnivals = Carnival.all
    erb :index
  end
  
  # NEW action
  get '/carnivals/new' do 
    erb :new
  end 

  # CREATE action
  post '/carnivals' do
    carnival = Carnival.create(params)
   
    redirect to "/carnivals/#{carnival.id}"
  end
  
  # SHOW action
  get '/carnivals/:id' do
    @carnival = Carnival.find(params[:id])

    erb :show
  end


end
