class Api::V1::MaladiesController < ApplicationController
    def index
        @maladies = Malady.all    
        render json: @maladies, status: :ok
    end

    def show
        @malady = Malady.find(params[:id])
        render json: @malady, status: :ok    
    end
end
