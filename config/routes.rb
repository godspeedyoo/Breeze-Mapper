RailsAngularSkeleton::Application.routes.draw do
  root 'application#index'
  get '*path' => 'application#index'
  
end
