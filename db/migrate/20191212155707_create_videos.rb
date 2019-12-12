class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :plays, null: false
      t.timestamps
      t.index :user_id
    end
  end
end
