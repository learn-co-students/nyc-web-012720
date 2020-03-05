class ApplicationController < ActionController::Base

    def home
        render './index.html.erb'
    end
end
