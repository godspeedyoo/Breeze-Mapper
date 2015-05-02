class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
    	# id,created_at,user_id,longitude,latitude
    	t.integer :user_id
    	t.decimal :longitude, :precision => 10, :scale=>6
    	t.decimal :latitude, :precision => 10, :scale=>6

    	t.timestamps
    end
  end
end
