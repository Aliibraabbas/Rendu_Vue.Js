<template>
    <h1>Clavier</h1>
    <form>
      <div class="container_input">
        <div class="input">
          <input type="text" v-model="numbers">
        </div>
        <div v-for="contacts in contact" :key="contacts.name">
          <p v-if="numbers === contacts.number">{{ contacts.name }}</p>
        </div>
        <!-- <p v-if="!isNumberExist() && numbers">Ce numéro n'est pas dans vos contacts</p> -->
        <p v-if="!isExist() && numbers">Inconnu</p>
      </div>
    </form>
    <div class="clavier">
      <div class="clavier0">
        <button class="number" @click="addNumber('1')">1</button>
        <button class="number" @click="addNumber('2')">2</button>
        <button class="number" @click="addNumber('3')">3</button>
        <button class="number" @click="addNumber('4')">4</button>
        <button class="number" @click="addNumber('5')">5</button>
        <button class="number" @click="addNumber('6')">6</button>
        <button class="number" @click="addNumber('7')">7</button>
        <button class="number" @click="addNumber('8')">8</button>
        <button class="number" @click="addNumber('9')">9</button>
        <button class="number" @click="addNumber('*')">*</button>
        <button class="number" @click="addNumber('0')">0</button>
        <img class="delete" @click="removeNum" src="../assets/delete.png" alt="delete_icon">
      </div>
      <br>
      <img  @class= "call" @click="Call" src="../assets/call.png" alt="call_icon">
    </div>
  </template>
  
  <script>
  
  export default {
    name: "ClavierView",
    computed: {
      numbers() {
        return this.$store.state.numbers
      },
      contact() {
        return this.$store.state.contact
      },
    },
  
    methods: {
      
      addNumber(number) {
        this.$store.commit('addNum', number)
      },
  
      isExist() {
        return this.contact.some(contacts => contacts.number === this.numbers)
      },
  
      removeNum() {
        this.$store.commit('removeNum')
      },
  
      Call() {
        let name;
        if(this.isExist()) {
          name = this.contact.find(contact => contact.number === this.numbers).name;
        } else {
          name = "Inconnu";
        }
        this.$store.commit('callHistory', {
          name: name,
          number: this.numbers,
          date: new Date().toLocaleString()
        })
      }
  
    }
  }
  </script>
  
  <style scoped>
  .clavier {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.clavier0 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px;
}

.number {
  color: white;
}
img {
  height: 40px;

}

form {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}


  input {
    width: 100%;
    height: 30px;
    border: none;
    border: #c08000 3px solid;
  }

  button {
    background-color: rgb(104, 104, 104);
    width: 50px;
    height: 50px;
    font-size: 30px;
    border: rgb(122, 122, 122) 3px solid;
    box-shadow: transparent 0 0 0 3px,rgba(66, 66, 66, 0.683) 0 6px 20px;
    border-radius: 10px;
  }

.delete {
  cursor: pointer;
}
  </style>