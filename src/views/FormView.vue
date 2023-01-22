<template>
    <h1>Ajouter un contact</h1>
    <div class="addcontact">
      <form @submit.prevent="addContact">
        <input type="text" placeholder="Nom" v-model="contact.name">
        <input type="text" placeholder="Numéro" maxlength="14" v-model="contact.number" >
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormView",
  
    computed: {
      contact() {
        return this.$store.state.contact
      }
    },
  
    methods: {
      addContact() {
  
        if(this.contact.name == "" || this.contact.number == null) return
  
        if(this.contact.find((contact) => contact.name === this.contact.name)) return
  
        this.$store.commit('addContact', {
          name: this.contact.name,
          number: this.contact.number.toString(),
        })
  
      }
    },
  }
  </script>
  
  <style scoped>
  
  .addcontact {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 50%;
    margin-bottom: 3rem;
    padding: 0.25rem;
    border: none;
    border-bottom: #ec850e 3px solid;
  }

  button {
    border-radius: 0.25rem;
    border: none;
    padding: 0.5rem 2rem;
    background-color: #ff9603;
    border: #c08000 3px solid;
    color: white;
  }
  </style>