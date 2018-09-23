FactoryBot.define do
  factory :todolist do
    name            { Faker::Name.last_name }
    description     { Faker::Address.street_address}
    done            { false }
  end
end
