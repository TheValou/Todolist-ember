define('todolist-frontend/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      return this.store.findAll('todolist');
    },

    actions: {
      save(description, name) {
        this.get('store').createRecord('todolist', {
          description,
          name
        }).save();
      },
      delete(todolist) {
        todolist.deleteRecord();
        todolist.save();
      },
      doneTodo(todolist) {
        let isDone = todolist.get('done');
        todolist.set('done', !isDone);
        todolist.save();
      },

      update(todolist) {
        todolist.get('name'); // => "Rails is Omakase"

        // todolist.set('name', 'A new post');

        todolist.save(); // => PATCH to '/posts/1'
      }
    }
  });
});