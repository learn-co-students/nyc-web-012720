class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.all 
    render json: @movies, status: :ok
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie, status: :ok
  end

  def review
    review = Review.create({
      content: params[:content],
      user: User.first,
      movie_id: params[:id].to_i,
      stars: params[:stars]
    })

    if review.save
      render json: review, status: :ok
    else
      render json: {errors: review.errors.full_messages[0]}
    end
  end

end
