class Story < ActiveRecord::Base
  validates :title, :url, presence: true
end
