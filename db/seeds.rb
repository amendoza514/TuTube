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


videoInfo1 = Video.create!(user_id: user1.id, title:"Spaghetti and meatballs", description:"a video about spaghetti and meatballs", category:"food", tags:["spaghetti", "meatballs", "Hey I'm walkin here"], comment_visibility: true)
# videoInfo2 = Video.create!(user_id: user1.id, title:"Cumquat: What is a cumquat?", description:"n/a", category:"food", tags:["cumquat", "notSquash"], comment_visibility: true)
# videoInfo3 = Video.create!(user_id: user2.id, title:"Building a youtube clone as slowly as possible", description:"my experience", category:"technology", tags:["bills", "elbows", "defense mechanism"], comment_visibility: false)
# videoInfo4 = Video.create!(user_id: user4.id, title:"Are cargo pants on the rise", description:"big pockets, big attitude", category:"fashion", tags:["pockets", "storage", "style"], comment_visibility: true)
# videoInfo5 = Video.create!(user_id: user3.id, title:"Corgis corgi corgus", description:"corg", category: "pets", tags:["dog", "dogs", "doggies"], comment_visibility: true)
# videoInfo6 = Video.create!(user_id: user2.id, title:"Dang that boi thicc", description:"Oh shoot here comes dat boi", category: "sports", tags:["lebron", "goat", "not bananable"], comment_visibility: true)

videoFile1 = open('https://tutube-dev.s3-us-west-1.amazonaws.com/2012+Celtics+BIG+Playoffs+Commercial.mp4')

videoInfo1.video.attach(io: videoFile1, filename: 'celtics.mp4')
