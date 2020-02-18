require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/students" do
    @students = Student.all
     erb :index
  end 

  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :show
  end
 

end
