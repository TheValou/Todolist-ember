# Simple application Todolist

Simple Todolist application, with PostgreSQL, Ember.js

## Installation

Follow these easy steps to install and start the app:

### Set up Rails app

First, install the gems required by the application:

    bundle install

Next, execute the database migrations/schema setup:

	rake db:create
  
	rake db:migrate
  
### Set up Ember app

Go in `todolist-frontend/`

	npm install
  
	bower install


### Launch App

	rails s
  
  ### Launch tests

	rspec
Will launch all tests

You can check Rspec Documentation for more details : https://github.com/rspec/rspec-rails 
