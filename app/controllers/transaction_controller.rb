class TransactionController < ApplicationController
	def index
		puts "*"*50
		puts params
		# transactions should return two arrays, first being earnings and second charges
		@transactions = [[], []]

		user_id = params[:user_id]
		if user
			@transactions[0] = Transaction.where(user_id: user_id, transaction_type: 'earning').order('created_at ASC')
			@transactions[1] = Transaction.where(user_id: user_id, transaction_type: 'charge').order('created_at ASC')
		else
			@transactions = Transaction.all.order('created_at ASC')
		end

		render :json => @transactions
	end

end