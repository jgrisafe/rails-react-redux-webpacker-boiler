Rails.application.routes.draw do
  
  root 'app#index'
  
  namespace :api do
    namespace :v1 do
      resources :test
    end
  end

end
