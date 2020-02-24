class CerealsController < ApplicationController
  before_action :find_cereal, only: [:show, :edit, :update, :destroy]

  def index 
    byebug
    @cereals = Cereal.all

    # render :index
  end 

  def show 
    # render :show
  end
  
  def new 
    @cereal = Cereal.new
    
    render :new 
  end 
  
  def create 
    @cereal = Cereal.create(cereal_params)
    
    # redirect_to "/cereals/#{@cereal.id}"
    # redirect_to  cereal_path(@cereal.id)
    # redirect_to  cereal_path(@cereal)
    redirect_to  @cereal
  end 
  
  def edit 
    # @cereal = Cereal.find(params[:id])
    
    # render :edit
  end 
  
  def update
    # @cereal = Cereal.find(params[:id])
    @cereal.update(cereal_params)
    
    redirect_to cereal_path(@cereal.id)
    # redirect_to cereal_path(@cereal)
    # redirect_to @cereal
  end 
  
  def destroy 
    # @cereal = Cereal.find(params[:id])
    @cereal.destroy 

    redirect_to cereals_path

  end 

  private 

  def cereal_params 
    params.require(:cereal).permit(:name, :price, :release_year, :img_url, :brand)
  end 

  def find_cereal
    @cereal = Cereal.find(params[:id])
  end 

end
