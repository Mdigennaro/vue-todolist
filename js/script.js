const app = new Vue({

  el: '#app',

  data:{
    todo:[
      {
        text: 'Alzarsi dal letto',
        done: true
      },
      {
        text: 'Cambiarsi',
        done: true
      },
      {
        text: 'Lavarsi',
        done: true
      },
      {
        text: 'Fare colazione',
        done: true
      },
      {
        text: 'Connettersi alla lezione',
        done: true
      },
    ],
  },
    
  methods:{
    
    doIt(singleTodo){

      console.log('click',singleTodo);

      if (singleTodo.done == true) {
        singleTodo.done = false;
      }else{
        singleTodo.done = true;
      }
      
    },

    deleteElement(singleTodo){
      console.log('delete',singleTodo);

      this.todo.splice(singleTodo, 1)

    }

  }

})

