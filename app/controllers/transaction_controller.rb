class TransactionController < ApplicationController
	def index
		# allow requests of different specificity: by user, transaction type, or all
		if params[:user_id]
			@transactions = Transaction.where(user_id: params[:user_id]).order('created_at ASC')
		elsif params[:type]
			@transactions = Transaction.where(transaction_type: params[:type]).order('created_at ASC')
		else
			@transactions = Transaction.all.order('created_at ASC')
		end
		render :json => @transactions
	end

end