# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:q
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

user1 = User.create!(email: "alfonso@gmail.com", password:"123456")
user2 = User.create!(email: "cumquat@gmail.com", password:"123456")
user3 = User.create!(email: "platypus@gmail.com", password:"123456")
user4 = User.create!(email: "cargo_pants@gmail.com", password:"123456")

videoInfo1 = Video.create!(user_id: user1.id, views: 2352435, title:"Spaghetti and meatballs", description:"a video about spaghetti and meatballs", category:"food", tags:["spaghetti", "meatballs", "Hey I'm walkin here"], comment_visibility: true)
videoInfo2 = Video.create!(user_id: user1.id, views: 7, title:"Cumquat: What is a cumquat?", description:"n/a", category:"food", tags:["cumquat", "notSquash"], comment_visibility: true)
videoInfo3 = Video.create!(user_id: user2.id, views: 765, title:"Building a youtube clone as slowly as possible", description:"my experience", category:"technology", tags:["bills", "elbows", "defense mechanism"], comment_visibility: false)
videoInfo4 = Video.create!(user_id: user4.id, views: 52312, title:"Are cargo pants on the rise", description:"big pockets, big attitude", category:"fashion", tags:["pockets", "storage", "style"], comment_visibility: true)
videoInfo5 = Video.create!(user_id: user3.id, views: 342315, title:"Corgis corgi corgus", description:"corg", category: "pets", tags:["dog", "dogs", "doggies"], comment_visibility: true)
videoInfo6 = Video.create!(user_id: user2.id, views: 765348, title:"Dang that boi thicc", description:"Oh shoot here comes dat boi", category: "sports", tags:["lebron", "goat", "not bananable"], comment_visibility: true)
videoInfo7 = Video.create!(user_id: user4.id, views: 96352, title:"Basketball basketball", description:"basketball", category: "pets", tags:["dog", "dogs", "doggies"], comment_visibility: true)
videoInfo8 = Video.create!(user_id: user3.id, views: 12, title:"Basketball wow!", description:"wow!", category: "pets", tags:["dog", "dogs", "doggies"], comment_visibility: true)
videoInfo9 = Video.create!(user_id: user3.id, views: 806235, title:"Llabteksab wow", description:"wow", category: "pets", tags:["dog", "dogs", "doggies"], comment_visibility: true)

videoFile1 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Celtics+BIG+Playoffs+Commercial.mp4')
videoInfo1.video.attach(io: videoFile1, filename: 'celtics.mp4')

videoFile2 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Oklahoma+City+Thunder+BIG+Playoffs+Promo.mp4')
videoInfo2.video.attach(io: videoFile2, filename: 'thunder.mp4')

videoFile3 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+Color.mp4')
videoInfo3.video.attach(io: videoFile3, filename: 'color.mp4')

videoFile4 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+Kobe+Bryant.mp4')
videoInfo4.video.attach(io: videoFile4, filename: 'kobe.mp4')

videoFile5 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+LeBron+James.mp4')
videoInfo5.video.attach(io: videoFile5, filename: 'big_bron.mp4')

videoFile6 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/Jingle+Hoops.mp4')
videoInfo6.video.attach(io: videoFile6, filename: 'jingle.mp4')

videoFile7 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/LeBron+going+BIG.mp4')
videoInfo7.video.attach(io: videoFile7, filename: 'lebron.mp4')

videoFile8 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/NBA+BIG+-+Go+(Dallas+Mavericks).mp4')
videoInfo8.video.attach(io: videoFile8, filename: 'dallas.mp4')

videoFile9 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/Spurs+Playoff+Promo+BIG.mp4')
videoInfo9.video.attach(io: videoFile9, filename: 'spurs.mp4')
