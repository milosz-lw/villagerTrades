const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            professions:[
                {name: 'Armorer', products:[
                    {name: 'Emerald', wantedItem: 'Coal', price: 15},
                    {name: 'Iron Leggins', wantedItem: 'Emerald', price: 7},
                    {name: 'Iron Boots', wantedItem: 'Emerald', price: 4},
                    {name: 'Iron Helmet', wantedItem: 'Emerald', price: 5},
                    {name: 'Iron Chestplate', wantedItem: 'Emerald', price: 9},
                    {name: 'Emerald', wantedItem: 'Iron Ignot', price: 4},
                    {name: 'Bell', wantedItem: 'Emerald', price: 36},
                    {name: 'Chainmail Boots', wantedItem: 'Emerald', price: 1},
                    {name: 'Chainmail Leggings', wantedItem: 'Emerald', price: 3},
                    {name: 'Emerald', wantedItem: 'Lava Bucket', price: 1},
                    {name: 'Emerald', wantedItem: 'Diamond', price: 1},
                    {name: 'Chainmail Helmet', wantedItem: 'Emerald', price: 1},
                    {name: 'Chainmail Chestplate', wantedItem: 'Emerald', price: 4},
                    {name: 'Enchanted Diamond Leggings', wantedItem: 'Emerald', minPrice: 19, maxPrice: 33},
                    {name: 'Enchanted Diamond Boots', wantedItem: 'Emerald', minPrice: 13, maxPrice: 27},
                    {name: 'Enchanted Diamond Helmet', wantedItem: 'Emerald', minPrice: 13, maxPrice: 27},
                    {name: 'Enchanted Diamond Chestplate', wantedItem: 'Emerald', minPrice: 21, maxPrice: 35}
                ]},
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