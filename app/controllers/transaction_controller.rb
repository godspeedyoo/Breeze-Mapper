class TransactionController < ApplicationController
	def index
		@transactions = Transaction.where(transaction_type: params[:type]).order('created_at ASC')
		render :json => @transactions
	end
end