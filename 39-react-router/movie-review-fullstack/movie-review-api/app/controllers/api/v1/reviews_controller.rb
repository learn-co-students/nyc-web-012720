class Api::V1::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews, status: :ok
  end

  def show
    @review = Review.find(params[:id].to_i)
    render json: @review, status: :ok
  end

  def destroy
    # get token from request headers
    # find user
    # if the user is an admin
    # delete the review
    # if successful, send back the review id
    # otherwise send back the errors 
    byebug
    
    @review = Review.find(params[:id].to_i)
    render json: @review.id
  end

end
