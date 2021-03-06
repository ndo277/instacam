Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show]
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :follows, only: [:show, :index, :create, :destroy]
  end 

  root to: 'static_pages#root'
end
