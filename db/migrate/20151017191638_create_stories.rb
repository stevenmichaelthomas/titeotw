class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.timestamps
    end
  end
end
