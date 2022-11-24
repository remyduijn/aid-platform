class CommunityRequestsController < ApplicationController

  before_action :set_community_request, only: %i[update]

  def index
    @community_requests = CommunityRequest.all
    render json: {requests: @community_requests, status: :ok}
  end

  def create
    @community_request = CommunityRequest.new(community_request_params)
    @community_request.user_id = @current_user
    if @community_request.save
      render json: {request: @community_request, status: :ok}
    else
      render json: {errors: @community_request.errors.full_messages, status: 409}
    end
  end

  def update
    if @community_request.update(community_request_params)
      render json: {request: @community_request, status: :ok}
    else
      render json: {errors: @community_request.errors.full_messages, status: 409}
    end
  end

  private

  def community_request_params
    params.require(:community_request).permit(:request_type, :description, :status, :lat, :lng)
  end

  def set_community_request
    @community_request = CommunityRequest.find(params[:id])
  end
end