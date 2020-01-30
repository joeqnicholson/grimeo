class Video < ApplicationRecord
    has_one_attached :video_file
    has_one_attached :thumbnail 
    has_many :likes
    has_many :comments

    validates :title, :description, presence: true

    has_many :comment_user,
    through: :comments,
    source: :user

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    validate :ensure_video
    def ensure_video
        unless self.video_file.attached?
            errors[:video]<< " can't be blank"
        end
    end

    validate :ensure_thumbnail
    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail]<< " can't be blank"
        end
    end

end