# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


Video.destroy_all
User.destroy_all
Comment.destroy_all

user_1 = User.create(username: 'Jimbo Bongo', password: 123456)
user_2 = User.create(username: 'Danny Doofus', password: 123456)
user_3 = User.create(username: 'Todo Delorian', password: 123456)
user_4 = User.create(username: 'Baba IsU', password: 123456)

video_1 = Video.new({:user_id => user_1.id, :title => 'Linus and the pumpkin', :description => 'Lucy and Linus wait for the Great Pumpkin', :plays => 12})
thumbnail_1 = open("https://grimeo-seeds.s3.amazonaws.com/charlie-brown.jpg")
video_1.thumbnail.attach(io: thumbnail_1, filename: 'charlie-brown.png')
video_file_1 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
video_1.video_file.attach(io: video_file_1, filename: 'charlie_brown+(1).mp4')
video_1.save!

# video_2 = Video.new({:user_id => user_4.id, :title => 'SCREAM!', :description => 'WOW!', :plays => 49})
# thumbnail_2 = open("https://grimeo-seeds.s3.amazonaws.com/scream.jpg")
# video_2.thumbnail.attach(io: thumbnail_2, filename: 'scream.jpg')
# video_file_2 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
# video_2.video_file.attach(io: video_file_2, filename: 'loony_tunes.mp4')
# video_2.save!

video_3 = Video.new({:user_id => user_2.id, :title => 'Spooky week', :description => 'An old promotion on spooky TV special', :plays => 58})
thumbnail_3 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_3.thumbnail.attach(io: thumbnail_3, filename: 'loony_thumb.png')
video_file_3 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_3.video_file.attach(io: video_file_3, filename: 'loony_tunes.mp4')
video_3.save!

# video_4 = Video.new({:user_id => user_3.id, :title => 'Betty Boop Halloween Special', :description => 'An old classic', :plays => 12})
# thumbnail_4 = open("https://grimeo-seeds.s3.amazonaws.com/betty-boop.jpg")
# video_4.thumbnail.attach(io: thumbnail_4, filename: 'betty-boop.jpg')
# video_file_4 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
# video_4.video_file.attach(io: video_file_4, filename: 'charlie_brown+(1).mp4')
# video_4.save!

# video_5 = Video.new({:user_id => user_4.id, :title => 'The Halloween Garden', :description => 'spooky!', :plays => 4})
# thumbnail_5 = open("https://grimeo-seeds.s3.amazonaws.com/pumpkin.jpg")
# video_5.thumbnail.attach(io: thumbnail_5, filename: 'pumpkin.jpg')
# video_file_5 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
# video_5.video_file.attach(io: video_file_5, filename: 'loony_tunes.mp4')
# video_5.save!

# video_6 = Video.new({:user_id => user_1.id, :title => 'Jack Skelington', :description => 'A scene from the nightmare before xmas', :plays => 26})
# thumbnail_6 = open("https://grimeo-seeds.s3.amazonaws.com/nightmare.jpg")
# video_6.thumbnail.attach(io: thumbnail_6, filename: 'nightmare.jpg')
# video_file_6 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
# video_6.video_file.attach(io: video_file_6, filename: 'charlie_brown+(1).mp4')
# video_6.save!

# video_7 = Video.new({:user_id => user_2.id, :title => 'Skeleton Dance', :description => 'spooky skeletons dancing', :plays => 112})
# thumbnail_7 = open("https://grimeo-seeds.s3.amazonaws.com/skeleton-dancing.jpg")
# video_7.thumbnail.attach(io: thumbnail_7, filename: 'skeleton-dancing.jpg')
# video_file_7 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
# video_7.video_file.attach(io: video_file_7, filename: 'charlie_brown+(1).mp4')
# video_7.save!

# video_8 = Video.new({:user_id => user_3.id, :title => 'Spooky Ghost Story', :description => 'spooky spooky spooky', :plays => 16})
# thumbnail_8 = open("https://grimeo-seeds.s3.amazonaws.com/ghost.jpg")
# video_8.thumbnail.attach(io: thumbnail_8, filename: 'ghost.jpg')
# video_file_8 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
# video_8.video_file.attach(io: video_file_8, filename: 'loony_tunes.mp4')
# video_8.save!

# video_9 = Video.new({:user_id => user_1.id, :title => 'Skeleton: The Movie', :description => 'a movie about a skeleton', :plays => 212})
# thumbnail_9 = open("https://grimeo-seeds.s3.amazonaws.com/skeleton_thumb.png")
# video_9.thumbnail.attach(io: thumbnail_9, filename: 'skeleton_thumb.png')
# video_file_9 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
# video_9.video_file.attach(io: video_file_9, filename: 'loony_tunes.mp4')
# video_9.save!



comment_1 = Comment.create!({:user_id => user_1.id, :body => 'I love Linus!!', :video_id => video_1.id})
comment_2 = Comment.create!({:user_id => user_2.id, :body => 'I hate Linus!!', :video_id => video_1.id})
comment_3 = Comment.create!({:user_id => user_4.id, :body => 'Go Batman!!', :video_id => video_3.id})
comment_4 = Comment.create!({:user_id => user_3.id, :body => 'This is great!!', :video_id => video_3.id})
