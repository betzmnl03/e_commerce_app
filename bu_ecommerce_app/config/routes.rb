Rails.application.routes.draw do

  get 'submissions/new'
  get 'submissions/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # root "api/v1/controllers/products"

  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :charges
      resources :categories, only:[:index] do 
        resources :subcategories, only:[:index] do
          resources :products , only:[:index] do
            
          end
        end 
      end
      get("/current_user", to:"sessions#get_current_user")
      get("/get_cart", to:"carts#get_cart")
      get("/get_wishlist", to:"wishlists#get_wishlist")
      get("/get_cart_details", to:"carts#get_cart_details")
     
      # get("/return_product", to:"search#return_product")
      # post("/find_product", to:"search#find_product")
      resources :products , only:[:show] do
        resources :reviews , only:[:new, :create]
        resources :carts, only:[:create, :destroy]
        resources :wishlists, only:[:create, :destroy]
      end

      resource :search, only:[:create, :show,:create]
      resources :carts, only:[:show,:index]
      resources :similar, only:[:show,:index]
      resources :wishlists, only:[:show,:index]
      resources :address, only:[:create, :show,:index]
      resources :orders, only:[:create, :show,:index]
      resources :ordered_products, only:[:create, :show,:index]
      resources :users ,only:[:new, :create, :show]
      resource :session, only:[:new,:create,:destroy] 
    end
end

resources :submissions, only:[:new, :index]
resources :payment_intents
root "submissions#index"


end

     