RailsAngularSkeleton::Application.routes.draw do
  root 'application#index'
  get '/data', to: 'data#index'
  get '/locations', to: 'location#index'
  get '/users', to: 'user#index'
  get '/transactions', to: 'transaction#index'
  
  get '*path' => 'application#index'

  
end
