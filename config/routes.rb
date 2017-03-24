Rails.application.routes.draw do
  root 'app#index'
  namespace :api do
    get "/"
  end
end
