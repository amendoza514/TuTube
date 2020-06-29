# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:q
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

user1 = User.create!(email: "king_james@gmail.com", password:"123456", verified: true, icon_color: '#6a0dad')
user2 = User.create!(email: "russel_3x2@gmail.com", password:"123456", verified: true, icon_color: '#add8e6')
user3 = User.create!(email: "mamba_mentality@gmail.com", password:"123456", verified: true, icon_color: '#DAA520')
user4 = User.create!(email: "boston_sports@gmail.com", password:"123456", verified: true, icon_color: '#008000')
user5 = User.create!(email: "demo_user@gmail.com", password:"123456", verified: false, icon_color: '#00FFFF')
user6 = User.create!(email: "big_fundamental@gmail.com", password:"123456", verified: true, icon_color: '#000000')
user7 = User.create!(email: "dirked_up_nowitzed_to_go@gmail.com", password:"123456", verified: true, icon_color: '#00FFFF')
user8 = User.create!(email: "wrrs_blew_a_threeOne_lead@gmail.com", password:"123456", verified: false, icon_color: '#FF4500')
user9 = User.create!(email: "orlando_bubble_ball@gmail.com", password:"123456", verified: false, icon_color: '#800000')


videoInfo1 = Video.create!(user_id: user4.id, views: 2352435, title:"Celtics Playoffs 2008. One and done", description:"The original super team.", category:"Sports", tags:["celtics", "nba", "green"], comment_visibility: true)
videoInfo2 = Video.create!(user_id: user2.id, views: 7, title:"The Dyansty That Never Was", description:"3 Future MVPs, now just Steven Adams.", category:"History", tags:["nba", "thunder", "dynasty"], comment_visibility: true)
videoInfo3 = Video.create!(user_id: user9.id, views: 765, title:"BIG Color", description:"Still better than the sleeved jerseys. Comment below on your favorite.", category:"Fashion", tags:["color", "nba", "BIG"], comment_visibility: true)
videoInfo4 = Video.create!(user_id: user3.id, views: 52312, title:"KOBE", description:"5 seconds on the clock, with 3 shooters wide open. Screw it. Step back hesi fadeaway jumper", category:"Lifestyle", tags:["nba", "midrange", "style"], comment_visibility: true)
videoInfo5 = Video.create!(user_id: user1.id, views: 342315, title:"Freight Trains and the modern NBA", description:"NBA refs have a tough decision to make. 1) Call the actual hard foul on a moving vehicle. 2) Give smaller pedestrians right of way, even if it contradicts context. Comment below with your take on fouling LeBron James", category: "Automobiles", tags:["train", "lebron", "GOAT"], comment_visibility: true)
videoInfo6 = Video.create!(user_id: user8.id, views: 765348, title:"Great Ad, Terrible Jerseys: A Story of the League's Worst Ever Uniforms", description:"Comment below with your least favorite unis. #bigPajamas #lebronJustRipsEm #keepingItFresh #yikes", category: "Fashion", tags:["sleeves", "nba", "marketing"], comment_visibility: true)
videoInfo7 = Video.create!(user_id: user1.id, views: 96352, title:"Goats | Part 3: Footwear", description:"Goats need particular attention when it comes to picking footwear for the job at hand. Here are some helpful tips from someone who spends too much money on footwear themselves", category: "Animals", tags:["GOAT", "nba"], comment_visibility: false)
videoInfo8 = Video.create!(user_id: user7.id, views: 12, title:"Many Teams to Choose From, Many Reasons to Jump Off the Bandwagon: The Texas Sports Team Problem", description:"Too many teams, not enough attention spans", category: "History", tags:["dallas", "nba", "mavs?"], comment_visibility: true)
videoInfo9 = Video.create!(user_id: user6.id, views: 806235, title:"Spurs Go CRAZY against OKC. Layups For DAYS. Full game highlights", description:"Boring basketball is consistent basketall", category: "Sports", tags:["nba", "team", "sharing"], comment_visibility: true)

videoFile1 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Celtics+BIG+Playoffs+Commercial.mp4')
thumbFile1 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/celtics2.jpg')
videoInfo1.thumbnail.attach(io: thumbFile1, filename: 'celtics.jpg')
videoInfo1.video.attach(io: videoFile1, filename: 'celtics.mp4')

videoFile2 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Oklahoma+City+Thunder+BIG+Playoffs+Promo.mp4')
videoInfo2.video.attach(io: videoFile2, filename: 'thunder.mp4')
thumbFile2 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/thunder.jpg')
videoInfo2.thumbnail.attach(io: thumbFile2, filename: 'thunder.jpg')


videoFile3 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+Color.mp4')
videoInfo3.video.attach(io: videoFile3, filename: 'color.mp4')
thumbFile3 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/isPm79xTzM4.jpg')
videoInfo3.thumbnail.attach(io: thumbFile3, filename: 'color.jpg')

videoFile4 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+Kobe+Bryant.mp4')
videoInfo4.video.attach(io: videoFile4, filename: 'kobe.mp4')
thumbFile4 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/kobe.jpg')
videoInfo4.thumbnail.attach(io: thumbFile4, filename: 'kobe.jpg')

videoFile5 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/BIG+LeBron+James.mp4')
videoInfo5.video.attach(io: videoFile5, filename: 'big_bron.mp4')
thumbFile5 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/1f4e4ec0ce697db7ebc2bc88179c5443.jpg')
videoInfo5.thumbnail.attach(io: thumbFile5, filename: 'big_bron.jpg')

videoFile6 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/Jingle+Hoops.mp4')
videoInfo6.video.attach(io: videoFile6, filename: 'jingle.mp4')
thumbFile6 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/jingle.jpg')
videoInfo6.thumbnail.attach(io: thumbFile6, filename: 'jingle.jpg')

videoFile7 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/LeBron+going+BIG.mp4')
videoInfo7.video.attach(io: videoFile7, filename: 'lebron.mp4')
thumbFile7 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/Image-from-iOS-1-1000x600.jpg')
videoInfo7.thumbnail.attach(io: thumbFile7, filename: 'lebron.jpg')

videoFile8 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/NBA+BIG+-+Go+(Dallas+Mavericks).mp4')
videoInfo8.video.attach(io: videoFile8, filename: 'dallas.mp4')
thumbFile8 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/mavs_ap.jpg')
videoInfo8.thumbnail.attach(io: thumbFile8, filename: 'dallas.jpg')

videoFile9 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/Spurs+Playoff+Promo+BIG.mp4')
videoInfo9.video.attach(io: videoFile9, filename: 'spurs.mp4')
thumbFile9 = open('https://tutube-seeds.s3-us-west-1.amazonaws.com/timduncanspurs.jpg')
videoInfo9.thumbnail.attach(io: thumbFile9, filename: 'spurs.jpg')
