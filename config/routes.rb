RailsAngularSkeleton::Application.routes.draw do
  root 'application#index'
  get '/locations', to: 'location#index'
  get '/users', to: 'user#index'
  
  get '*path' => 'application#index'

  
end
