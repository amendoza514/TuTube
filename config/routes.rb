Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:show, :index] do 
      resources :likes, only: [:index, :create, :destroy]
    end
    resources :comments, only: [:create, :destroy, :update] do 
      resources :likes, only: [:index, :create, :destroy]
    end
    
    get '/search/:search', to: 'videos#search'
  end


end
