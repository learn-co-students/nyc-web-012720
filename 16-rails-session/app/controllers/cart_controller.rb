class CartController < ApplicationController



  def update
    # nacho_id

    add_nacho_to_cart(params[:nacho_id])


    byebug


    redirect_to nachos_path
  end


end
