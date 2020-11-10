import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default class TodosController extends Controller {
	
	@empty('todoTitle') 
	isDisabled
  	
  	filter = null

  	actions = {
    	createTodo() {
    		var todo = this.store.createRecord("todo", {
    			title:this.get("todoTitle"), 
   		 		completed:false
    		});
    		todo.save();
    	    this.set('todoTitle', '');
    	}, 
    	updateTodo(todo) {
    		var t = this.store.peekRecord('todo', todo.id);
    		t.completed = !t.completed
    		t.save();
    	},
    	deleteTodo(todo) {
    		var t = this.store.peekRecord('todo', todo.id);
    		t.destroyRecord();
    	},
    	pending() {
    		filter = false
    	},
    	complete() {
    		filter = true
    	},
    	allTodo() {
    		filter = null
    	}

  	}
}
