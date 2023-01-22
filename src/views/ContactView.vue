<template>
    <div>
      <h1>Contact</h1>
    </div>
    <div class="contact" v-for="contacts in contact" :key="contacts.name" >
      <h2 >{{ contacts.name }} : {{ contacts.number }}</h2>
      <div>
        <img src="../assets/call.png" alt="call_icon">
      </div>
    </div>

    <br><br><br>
    <router-link to="/form" class="form">+ Add a number</router-link>
  </template>
  
  <script>
  
  export default {
    name: "ContactView",
    computed: {
      contact() {
        return this.$store.state.contact
      },
    },

  }
  
  </script>
  
  <style scoped>
  

  .form {
    text-decoration: none;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    background-color: #ff9603;
    border: #c08000 3px solid;
    color: white;

  }
  
  
  img {
    height: 30px;
  }
  
  
  </style>