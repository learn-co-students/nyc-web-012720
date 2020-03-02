class ApplicationController < ActionController::Base


  # need to hold all my nacho id's

    def cart
      session[:cart] ||= []
      # if session[:cart]
      #   session[:cart]
      # else
      #   session[:cart] = []
      # end
    end

  # method to add a nacho to a cart

  def add_nacho_to_cart(nacho_id)
    cart << nacho_id
  end
  #
  # get the nacho instance from all the id's
  # pass them into the view
  def get_items_from_cart
    @cart_items = Nacho.find(cart)
  end

end
