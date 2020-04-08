class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :img, :upvotes, :downvotes, :year, :num_reviews

  has_many :reviews, serializer: ReviewSerializer

  def num_reviews
    Review.where(movie_id: @object.id).count
  end

end
