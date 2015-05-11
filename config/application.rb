require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, Rails.env)

module RailsAngularSkeleton
  class Application < Rails::Application
    config.assets.paths << Rails.root.join("vendor","assets","bower_components")
    config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-css","fonts")
    config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff)$)
  end
end
