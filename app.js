const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            professions:[
                {name: 'Armorer'},
                {name: 'Butcher'},
                {name: 'Cartographer'},
                {name: 'Cleric'},
                {name: 'Farmer'},
                {name: 'Fisherman'},
                {name: 'Fletcher'},
                {name: 'Leatherworker'},
                {name: 'Librarian'},
                {name: 'Mason'},
                {name: 'Shepherd'},
                {name: 'Toolsmith'},
                {name: 'Weaponsmith'}
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