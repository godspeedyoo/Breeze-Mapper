RailsAngularSkeleton::Application.routes.draw do
  root 'application#index'
  get '/data', to: 'data#index'
  get '*path' => 'application#index'
end
