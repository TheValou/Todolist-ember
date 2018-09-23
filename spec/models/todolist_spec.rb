require 'rails_helper'

RSpec.describe Todolist, type: :model do

  context "Validations" do
    subject { FactoryBot.create(:todolist) }
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it { expect(subject.done).to be(false) }
  end

end
