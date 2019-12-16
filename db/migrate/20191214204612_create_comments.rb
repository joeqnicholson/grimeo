class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.string :body, null: false
      t.timestamps
      t.index :user_id
      t.index :video_id
    end
  end
end
