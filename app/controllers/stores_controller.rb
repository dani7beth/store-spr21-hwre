class StoresController < ApplicationController

  #Read
  def index
    @stores = Store.all
    render component: 'Stores', props: {stores: @stores}
  end

  def show
    @store = Store.find(params[:id])
    render component: 'Store', props: {store: @store}
  end

  #Create
  def new
    @store = Store.new
    render component: 'StoresNew', props: { store: @store }
  end

  def create 
    @store = Store.new(store_params)
    if @store.save
      redirect_to stores_path
    else
      render component: 'StoresNew', props: { store: @store }
    end
  end

  def edit
    @store = Store.find(params[:id])
    render component: 'StoreEdit', props:{store: @store}
  end

  def update
    @store = Store.find(params[:id])
    if @store.update(store_params)
      redirect_to stores_path
    else
      render component: 'StoreEdit', props: {store: @store}
    end
  end

  def destroy
   @store = Store.find(params[:id])
   @store.destroy
   redirect_to stores_path 
  end

  private
  def store_params
    params.require(:store).permit(:name, :location, :hours)
  end
end
