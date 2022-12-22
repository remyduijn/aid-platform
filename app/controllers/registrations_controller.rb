class RegistrationsController < ApplicationController
    def create
        user = User.create!(
            name: params['user']['name'],
            last_name: params['user']['last_name'],
            email: params['user']['email'],
            identity: params['user']['identity'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
        )

        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user
            }
        else 
            render json: { status: 500 }
        end
    end
end