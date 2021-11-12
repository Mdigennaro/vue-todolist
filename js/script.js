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
  },
    
  methods:{
    
    doIt(singleTodo){

      console.log('click',singleTodo);

      if (singleTodo.done == false) {
        singleTodo.done = true;
      }else{
        singleTodo.done = false;
      }
      
    },

  }

})

