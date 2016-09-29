import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.bindListeners({
      updateTasks: TaskActions.updateTasks,
      addTask: TaskActions.addTask,
    });

    this.tasks = [];
  }

  updateTasks(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks = [Object.assign(this.tasks, { task })];
  }
}

module.exports = alt.createStore(TaskStore);
