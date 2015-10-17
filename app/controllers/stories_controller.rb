class StoriesController < ApplicationController
  def index
    @stories = Story.all.order(created_at: :desc)

    render json: @stories
  end
end
