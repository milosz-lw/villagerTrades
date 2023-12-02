const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'a',
            professions:[
                {name: 'armorer'},
                {name: 'butcher'},
                {name: 'cartographer'},
                {name: 'cleric'},
                {name: 'farmer'},
                {name: 'fisherman'},
                {name: 'fletcher'},
                {name: 'leatherworker'},
                {name: 'librarian'},
                {name: 'mason'},
                {name: 'shepherd'},
                {name: 'toolsmith'},
                {name: 'weaponsmith'}
            ]
        }
    },
    methods:{
        changeProfession(e){
            this.currentProfession = e.target.options[e.target.options.selectedIndex].text
        }
    }
})

app.mount('#app')