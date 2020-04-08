class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :stars, :author_name

  def author_name
    author = User.find(@object.user_id)
    author.username
  end

  # def movie_title
  #   movie = Movie.find(@object.movie_id)
  #   movie.title
  # end
end
