class CreateChatrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.integer :community_request_id
      t.integer :voluteer_id
      t.integer :requester_id

      t.timestamps
    end
  end
end
