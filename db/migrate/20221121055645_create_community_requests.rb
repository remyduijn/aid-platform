class CreateCommunityRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :community_requests do |t|
      t.string :type
      t.text :description
      t.string :status
      t.decimal :lat, precision: 10, scale: 6
      t.decimal :lng, precision: 10, scale: 6
      t.integer :user_id

      t.timestamps
    end
  end
end
