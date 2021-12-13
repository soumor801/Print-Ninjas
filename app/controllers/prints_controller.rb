class PrintsController < ApplicationController
  before_action :set_print, only: :show
      # GET /prints
  def index
    @prints = Print.all

    render json: @prints
  end

  # GET /prints/1
  def show
    render json: @print, include: :prints
  end

  # POST /prints
  def create
    @print = Print.new(print_params)

    if @print.save
      render json: @print, status: :created
    else
      render json: @print.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prints/1
  def update
    if @print.update(print_params)
      render json: @print
    else
      render json: @print.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prints/1
  def destroy
    @print.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_print
      @print = Print.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def print_params
      params.require(:print).permit(:title, :image_link, :anime_name, :is_digital, :is_physical, :price, :description)
    end
end
