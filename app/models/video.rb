# == Schema Information
#
# Table name: videos
#
#  id                 :bigint           not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  description        :string
#  category           :string
#  tags               :string
#  comment_visibility :boolean          default(TRUE), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  views              :integer
#
class Video < ApplicationRecord
    validates :title, presence:true 
    has_one_attached :video 


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    
end
