class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
			# id,created_at,user_id,transaction_type,amount	
    	
			t.integer :user_id
			t.string :transaction_type
			t.decimal :amount

      t.timestamps
    end
  end
end
