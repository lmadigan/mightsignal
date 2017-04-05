Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :entries, only: [:new, :create, :index, :update, :show, :destroy]
    resources :months, only: [:show, :index]
  end
end
