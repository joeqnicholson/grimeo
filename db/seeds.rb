# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.create!({:user_id => 1, :title => 'charlie brown', :description => 'lucy and the pumpkin', :plays => 0})
Comment.create!({:user_id => 1, :body => 'i love charlie!!', :video_id => 3})
Comment.create!({:user_id => 15, :body => 'i hate charlie!!', :video_id => 3})
Comment.create!({:user_id => 4, :body => 'go charlie!!', :video_id => 3})
Comment.create!({:user_id => 2, :body => 'i love charlie!!', :video_id => 3})