const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            currentProfessionIndex: 0,
            professions:[
                {name: 'Armorer', products:[
                    {name: 'Emerald', wantedItem: 'Coal', price: 15},
                    {name: 'Iron Leggings', wantedItem: 'Emerald', price: 7},
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
                {name: 'Butcher', products:[
                    {name: 'Emerald', wantedItem: 'Raw Chicken', price: 14},
                    {name: 'Emerald', wantedItem: 'Raw Porkchop', price: 7},
                    {name: 'Emerald', wantedItem: 'Raw Rabbit', price: 4},
                    {name: 'Rabbit Stew', wantedItem: 'Emerald', price: 1},
                    {name: 'Emerald', wantedItem: 'Coal', price: 15},
                    {name: 'Cooked Porkchop', wantedItem: 'Emerald', price: 1},
                    {name: 'Cooked Chicken', wantedItem: 'Emerald', price: 1},
                    {name: 'Emerald', wantedItem: 'Raw Mutton', price: 7},
                    {name: 'Emerald', wantedItem: 'Raw Beef', price: 10},
                    {name: 'Emerald', wantedItem: 'Dried Kelp Block', price: 10},
                    {name: 'Emerald', wantedItem: 'Sweet Berries', price: 10}
                ]},
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
            this.currentProfessionIndex = e.target.options.selectedIndex
        }
    }
})

app.mount('#app')
