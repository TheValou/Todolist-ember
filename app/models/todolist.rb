class Todolist < ActiveRecord::Base

  validates_presence_of :name, :description
  before_save :default_values

  private

  def default_values
    self.done ||= false
  end
end
