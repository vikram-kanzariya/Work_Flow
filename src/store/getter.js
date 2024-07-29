export const getters = {
  getTasks(state){
    return state.tasks;
  },
  getEmailTasks(state , id){
    state.tasks.forEach((task) => {
      if(task.id == id){
        console.log("Tasks Are: " ,  getTasks[0].name)
        return task;
      }
    });
  }
};