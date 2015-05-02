RailsAngularSkeleton::Application.routes.draw do
  root 'application#index'
  get '*path' => 'application#index'

  get '/locations', to: 'locations#index', as: 'locations'
  
end
