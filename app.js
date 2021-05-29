new Vue({
  el: '#app',
  
  data () {
    return {
      titleHome: 'My Pets with VueJs',
      imgLogo: 'images/mypet.png',
      alt: 'My pet',

      pets: [],
      title: '',
      age: 0
    }
  },
  
  computed: {},
  
  methods: {
    addPet(){
      let newPet = { title: this.title, age: this.age }
      this.pets.push(newPet)
      this.title = ''
      this.time = null
    }
  }
})