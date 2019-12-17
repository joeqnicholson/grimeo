# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


Video.destroy_all

video_1 = Video.create!({:user_id => 1, :title => 'charlie brown1', :description => 'lucy and the pumpkin', :plays => 0})
thumbnail_1 = open("https://grimeo-seeds.s3.amazonaws.com/MZk6Vohdz5qKgRHikNRgcYkh.png")
video_1.thumbnail.attach(io: thumbnail_1, filename: 'MZk6Vohdz5qKgRHikNRgcYkh.png')
video_file_1 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
video_1.video_file.attach(io: video_file_1, filename: 'charlie_brown+(1).mp4')
video_1.save

video_3 = Video.create!({:user_id => 6, :title => 'loony1', :description => 'loony toon', :plays => 0})
thumbnail_3 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_3.thumbnail.attach(io: thumbnail_3, filename: 'loony_thumb.png')
video_file_3 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_3.video_file.attach(io: video_file_3, filename: 'loony_tunes.mp4')
video_3.save

video_4 = Video.create!({:user_id => 4, :title => 'charlie brown2', :description => 'lucy and the pumpkin', :plays => 0})
thumbnail_4 = open("https://grimeo-seeds.s3.amazonaws.com/MZk6Vohdz5qKgRHikNRgcYkh.png")
video_4.thumbnail.attach(io: thumbnail_4, filename: 'MZk6Vohdz5qKgRHikNRgcYkh.png')
video_file_4 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
video_4.video_file.attach(io: video_file_4, filename: 'charlie_brown+(1).mp4')
video_4.save

video_5 = Video.create!({:user_id => 6, :title => 'loony2', :description => 'loony toon', :plays => 0})
thumbnail_5 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_5.thumbnail.attach(io: thumbnail_5, filename: 'loony_thumb.png')
video_file_5 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_5.video_file.attach(io: video_file_5, filename: 'loony_tunes.mp4')
video_5.save

video_6 = Video.create!({:user_id => 6, :title => 'charlie brown3', :description => 'lucy and the pumpkin', :plays => 0})
thumbnail_6 = open("https://grimeo-seeds.s3.amazonaws.com/MZk6Vohdz5qKgRHikNRgcYkh.png")
video_6.thumbnail.attach(io: thumbnail_6, filename: 'MZk6Vohdz5qKgRHikNRgcYkh.png')
video_file_6 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
video_6.video_file.attach(io: video_file_6, filename: 'charlie_brown+(1).mp4')
video_6.save

video_7 = Video.create!({:user_id => 7, :title => 'charlie brown4', :description => 'lucy and the pumpkin', :plays => 0})
thumbnail_7 = open("https://grimeo-seeds.s3.amazonaws.com/MZk6Vohdz5qKgRHikNRgcYkh.png")
video_7.thumbnail.attach(io: thumbnail_7, filename: 'MZk6Vohdz5qKgRHikNRgcYkh.png')
video_file_7 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
video_7.video_file.attach(io: video_file_7, filename: 'charlie_brown+(1).mp4')
video_7.save

video_8 = Video.create!({:user_id => 6, :title => 'loony', :description => 'loony toon', :plays => 0})
thumbnail_8 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_8.thumbnail.attach(io: thumbnail_8, filename: 'loony_thumb.png')
video_file_8 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_8.video_file.attach(io: video_file_8, filename: 'loony_tunes.mp4')
video_8.save

video_2 = Video.create!({:user_id => 6, :title => 'loony', :description => 'loony toon', :plays => 0})
thumbnail_2 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_2.thumbnail.attach(io: thumbnail_2, filename: 'loony_thumb.png')
video_file_2 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_2.video_file.attach(io: video_file_2, filename: 'loony_tunes.mp4')
video_2.save

video_8 = Video.create!({:user_id => 6, :title => 'loony', :description => 'loony toon', :plays => 0})
thumbnail_8 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_8.thumbnail.attach(io: thumbnail_8, filename: 'loony_thumb.png')
video_file_8 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_8.video_file.attach(io: video_file_8, filename: 'loony_tunes.mp4')
video_8.save

video_2 = Video.create!({:user_id => 6, :title => 'loony', :description => 'loony toon', :plays => 0})
thumbnail_2 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
video_2.thumbnail.attach(io: thumbnail_2, filename: 'loony_thumb.png')
video_file_2 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
video_2.video_file.attach(io: video_file_2, filename: 'loony_tunes.mp4')
video_2.save



# video4 = Video.create!({:user_id => 4, :title => 'charlie brown', :description => 'lucy and the pumpkin', :plays => 0})
# thumbnail_4 = open("https://grimeo-seeds.s3.amazonaws.com/MZk6Vohdz5qKgRHikNRgcYkh.png")
# video4.thumbnail.attach(io: thumbnail_4, filename: 'MZk6Vohdz5qKgRHikNRgcYkh.png')
# video_4 = open("https://grimeo-seeds.s3.amazonaws.com/charlie_brown+(1).mp4")
# video4.video.attach(io: video_4, filename: 'charlie_brown+(1).mp4')
# video4.save

# video5 = Video.create!({:user_id => 2, :title => 'charlie brown', :description => 'lucy and the pumpkin', :plays => 0})
# thumbnail_5 = open("https://grimeo-seeds.s3.amazonaws.com/loony_thumb.png")
# video5.thumbnail.attach(io: thumbnail_5, filename: 'loony_thumb.png')
# video_5 = open("https://grimeo-seeds.s3.amazonaws.com/loony_tunes.mp4")
# video5.video.attach(io: video_5, filename: 'loony_tunes.mp4')
# video5.save

# video6 = Video.create!({:user_id => 7, :title => 'charlie brown', :description => 'lucy and the pumpkin', :plays => 0})
# thumbnail_6 = open("https://grimeo-seeds.s3.amazonaws.com/skeleton_thumb.png")
# video6.thumbnail.attach(io: thumbnail_6, filename: 'skeleton_thumb.png')
# video_6 = open("https://grimeo-seeds.s3.amazonaws.com/skeleton_thumb.png")
# video6.video.attach(io: video_6, filename: 'skeleton_thumb.png')
# video6.save

# Comment.create!({:user_id => 1, :body => 'i love charlie!!', :video_id => 3})
# Comment.create!({:user_id => 15, :body => 'i hate charlie!!', :video_id => 3})
# Comment.create!({:user_id => 4, :body => 'go charlie!!', :video_id => 3})
# Comment.create!({:user_id => 2, :body => 'i love charlie!!', :video_id => 3})