if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_aid_platform", domain: "aid-platform-react.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_aid_platform"
end