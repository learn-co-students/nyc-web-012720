class CerealsController < ApplicationController
  before_action :find_cereal, only: [:show, :edit, :update, :destroy]

  def index 
    @cereals = Cereal.all

    # render :index
  end 

  def show 
    # render :show
  end
  
  def new 
    @cereal = Cereal.new
    @errors = flash[:errors]

    render :new 
  end 
  
  def create 
    @cereal = Cereal.create(cereal_params)
  
    if @cereal.valid?
      redirect_to  @cereal
    else
      flash[:errors] = @cereal.errors.full_messages
      
      # render :new 
      redirect_to new_cereal_path 
    end 
    
    # different ways to redirect
    # redirect_to "/cereals/#{@cereal.id}"
    # redirect_to  cereal_path(@cereal.id)
    # redirect_to  cereal_path(@cereal)
  end 
  
  def edit 
    # @cereal = Cereal.find(params[:id])
    
    # render :edit
  end 
  
  def update
    # @cereal = Cereal.find(params[:id])

    if @cereal.update(cereal_params)
      redirect_to cereal_path(@cereal.id)
    else
      flash[:errors] = @cereal.errors.full_messages
      
      redirect_to edit_cereal_path(@cereal)
    end  

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
