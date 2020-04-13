class Api::V1::RemediesController < ApplicationController
    def index
        @remedies = Remedy.all    
        render json: @remedies, status: :ok
    end

    def show
        @remedy = Remedy.find(params[:id])
        render json: @remedy, status: :ok    
    end

    def create 
        @remedy = Remedy.create!({
            name: remedy_params[:name],
            image: remedy_params[:image],
            ingredients: remedy_params[:ingredients],
            instructions: remedy_params[:instructions]
        })

        params[:maladies].each do |m|
            Treatment.create({
                remedy: @remedy,
                malady_id: m.to_i
            })
        end

        render json: @remedy
    end

    def remedy_params
        params.permit(:remedy, :name, :image, :ingredients, :instructions, :maladies)
    end

end
