class DataController < ApplicationController
	# the purpose of this controller is to format data for convenient use
	# on the front end. It will take all relevant data and package it to a 
	# convenient structure in order to eager load onto angular controllers
	# # and minimize server requests.

	# { 
	# 	1: {
	# 		name: 'sample_user',
	# 		transactions: {
	# 			1: { 
	# 				user_id: 1, 
	# 				transaction_type: 'earning',
	# 				amount: 10.01,
	# 				created_at: datetime
	# 			}
	# 		},
	# 		locations: {
	# 			1: {
	# 				user_id: 1,
	# 				longitude: decimal,
	# 				latitude: decimal,
	# 				created_at: date
	# 			}
	# 		}
	# 	},
	# 	2: etc...
	# }

	def index
		data = { }

		locations = Location.all
		transactions = Transaction.all
		users = User.all

		users.each do |user|
			data[user.id] = { name: user.name, transactions: {}, locations: {} }
		end

		transactions.each do |transaction|
			data[transaction.user_id][:transactions][transaction.id] = transaction
		end

		locations.each do |location|
			data[location.user_id][:locations][location.id] = location
		end

		render :json => data

	end
end