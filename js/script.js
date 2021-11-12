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
    
    doIt(){

      if (this.todo = false) {
        this.todo = true;

        console.log(this.todo);
      };

      console.log(doIt);
    },

  }

})

