export const mutations = {
  setTasks(state , payload){
    // console.log("State is: " , state)

    if(payload.category == "startTask"){
      state.tasks[0].data.push(payload)
    }

    if(payload.category == "emailTask"){
      console.log('Category: ' , payload.category)
      state.tasks.push(payload)
    }
  }
};