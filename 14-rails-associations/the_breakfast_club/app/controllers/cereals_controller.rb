class CerealsController < ApplicationController
  def index 
    @cereals = Cereal.all

    # render :index
  end 

  def show 
    @cereal = Cereal.find(params[:id])
    
    render :show
  end
  
  def new 
    @cereal = Cereal.new
    
    # render :new 
  end 
  
  def create 
    @cereal = Cereal.create(cereal_params)
    
    # redirect_to "/cereals/#{@cereal.id}"
    # redirect_to  cereal_path(@cereal.id)
    # redirect_to  cereal_path(@cereal)
    redirect_to  @cereal
  end 
  
  def edit 
    @cereal = Cereal.find(params[:id])
    
    # render :edit
  end 
  
  def update
    @cereal = Cereal.find(params[:id])
    @cereal.update(cereal_params)

    redirect_to cereal_path(@cereal.id)
    # redirect_to cereal_path(@cereal)
    # redirect_to @cereal
  end 

  private 

  def cereal_params 
    params.require(:cereal).permit(:name, :price, :release_year, :img_url, :brand)
  end 

end
