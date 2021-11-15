const app = new Vue({

  el: '#app',

  data:{
    todo:[
      {
        text: 'Alzarsi dal letto',
        done: false
      },
      {
        text: 'Cambiarsi',
        done: false
      },
      {
        text: 'Lavarsi',
        done: false
      },
      {
        text: 'Fare colazione',
        done: false
      },
      {
        text: 'Connettersi alla lezione',
        done: false
      },
    ],

    newTodo:{
      text: 'text',
      done: false
    }
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

    deleteElement(index){
      console.log('delete',index);

      this.todo.splice(index,1)
    },

  }

})

