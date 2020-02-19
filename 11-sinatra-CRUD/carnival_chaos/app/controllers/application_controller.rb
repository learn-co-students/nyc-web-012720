require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
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

  # EDIT action
  get '/carnivals/:id/edit' do
    @carnival = Carnival.find(params[:id])
    
    erb :edit
  end
  
  patch '/carnivals/:id' do 
    carnival = Carnival.find(params[:id])
    carnival.update(params[:carnival])
    
    redirect to "/carnivals/#{carnival.id}"
  end 

  delete '/carnivals/:id' do
    carnival = Carnival.find(params[:id])
    
    carnival.destroy

    redirect to "/carnivals"
  end

end
