class ReviewsController < ApplicationController

  def new 
    @review = Review.new

    @cereals = Cereal.all
    @users = User.all
  end 

  def create 
    review = Review.create(review_params)

    # redirect_to cereal_path(@review.cereal)  #"/cereal/#{}"
    redirect_to review.cereal
  end 

  private 

  def review_params
    params.require(:review).permit(:content, :rating, :user_id, :cereal_id)
  end 
end
