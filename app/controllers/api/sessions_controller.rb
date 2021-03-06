class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user    
            login(@user)
            render 'api/users/show'
        else  
            render json: ["Couldn't find your TuTube Account"], status: 401
        end
    end

    def destroy 
        @user = current_user 
        if @user    
            logout
            #LATER redirect back to home on logout
        else 
            render json: { message: 'Logout unsuccessful'}, status: 404
        end
    end
    

end
