require 'sinatra'
require 'pry'

get '/home' do 
  "<h1>YOU MADE IT HOME</h1>"
end 

get "/profile/:word" do 
  
  binding.pry
  
end 