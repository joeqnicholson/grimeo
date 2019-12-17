class Video < ApplicationRecord
    has_one_attached :video_file
    has_one_attached :thumbnail 
    has_many :likes
    has_many :comments

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end