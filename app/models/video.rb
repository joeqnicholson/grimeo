class Video < ApplicationRecord
    has_one_attached :video 
    has_one_attached :thumbnail 

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end