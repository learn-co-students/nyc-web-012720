require 'rest-client'
require 'pry'
require 'json'

def get_user_input
  puts "What books would you like to search for? OR enter 1 to exit"
  input = gets.chomp
end 


def get_all_books(input)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{input}"
  response = RestClient.get(url)
  my_response = JSON.parse(response)
  all_books = my_response["items"]
end 

def print_book_info(all_books)
  all_books.each do |book|
    puts "Titles: "  + book["volumeInfo"]["title"]
    if book["volumeInfo"]["authors"]
      puts "Authors: " + book["volumeInfo"]["authors"].join(" | ")
    end
    puts "=" * 60
  end 
end 


def run
  input = nil
  while input != "1"
    input = get_user_input
    all_books = get_all_books(input)
    print_book_info(all_books)
  end 
end 

run


0
