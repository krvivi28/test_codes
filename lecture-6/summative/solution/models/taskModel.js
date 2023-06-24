export default class TaskModel {
  static tasks = [];
  static createNewTask = (newTask) => {
    TaskModel.tasks.push(newTask);
    return TaskModel.tasks;
  };
  static getAllTasks = () => {
    if (TaskModel.tasks.length === 0) {
      return null;
    }
    return TaskModel.tasks;
  };
}
