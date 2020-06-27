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
#
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
