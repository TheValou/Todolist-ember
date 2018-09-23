class TodolistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :done
end
