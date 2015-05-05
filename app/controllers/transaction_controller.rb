class TransactionController < ApplicationController
	def index
		puts "*"*50
		puts params
		# transactions should return two arrays, first being earnings and second charges
		# A request without the userId will return all transactions
		@transactions = [[], []]

		user_id = params[:user_id].to_i if params[:user_id]
		
		if user_id
			@transactions[0] = Transaction.where(user_id: user_id, transaction_type: 'earning').order('created_at ASC')
			@transactions[1] = Transaction.where(user_id: user_id, transaction_type: 'charge').order('created_at ASC')
		else
			@transactions[0] = Transaction.where(transaction_type: 'earning').order('created_at ASC')
			@transactions[1] = Transaction.where(transaction_type: 'charge').order('created_at ASC')
		end
		render :json => @transactions
	end

end