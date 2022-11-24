Rails.application.routes.draw do
  root to: "static#home"

  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :community_requests, only: [:index, :create, :update], path: '/requests'

  resources :chat_rooms, only: [:index, :create] do
    resources :messages, only: [:create]
  end
end
