class AddRefColumn < ActiveRecord::Migration[6.1]
  def change
    add_reference :prints, :user
  end
end
