<template>
    <h1>Journal d'appel</h1>
    <div v-for="call in history" :key="call.name">
      <h3>{{call.name}} numéro: {{ call.number }} le {{call.date}}</h3>
      <div>
       <img class="call" @click="Call(call.number)" src="../assets/call.png" alt="call_icon">
      </div>
    </div>
    <h3 v-if="history.length === 0">Aucun appel récent</h3>
  </template>
  
  <script>
  
  
  export default {
    name: 'journalView',
    computed: {
        history() {
        return this.$store.state.called
      },
    },
    
    methods: {
      isExist(number) {
        return this.history.some(call => call.number === number)
      },
  
      Call(number) {
        let name;
        if(this.isExist(number)) {
          name = this.history.find(call => call.number === number).name;
        } else {
          name = "Inconnu";
        }

        this.$store.commit('callHistory', {
          name: name,
          number: number,
          date: new Date().toLocaleString()
        })
      }
    },
  
  }
  </script>
  
  <style scoped>
  
  img {
    height: 30px;
  }
  
  
  </style>
  