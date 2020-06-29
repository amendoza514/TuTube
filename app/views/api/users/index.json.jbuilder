@users.each do |user|
    json.set! user.id do
        json.extract! user, :email, :id, :verified, :icon_color
        #does this correspond to the key that I set in the video.rb?
    end
end