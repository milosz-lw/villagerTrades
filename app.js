const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            currentProfessionIndex: 0,
            currentProductIndex: 2,
            professions:[
                {name: 'Armorer', products:[
                    {name: 'Emerald', selected: true, wantedItems:[
                        {name: 'Coal', price: 15},
                        {name: 'Iron Ingot', price: 4},
                        {name: 'Lava Bucket', price: 1},
                        {name: 'Diamond', price: 1},
                    ]},
                    {name: 'Iron Leggings', selected: false, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Iron Boots', selected: false, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Iron Helmet', selected: false, wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: 'Iron Chestplate', selected: false, wantedItems:[
                        {name: 'Emerald', price: 9}
                    ]},
                    {name: 'Bell', selected: false, wantedItems:[
                        {name: 'Emerald', price: 36}
                    ]},
                    {name: 'Chainmail Boots', selected: false, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Leggings', selected: false, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Chainmail Helmet', selected: false, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Chestplate', selected: false, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Enchanted Diamond Leggings', selected: false, wantedItems:[
                        {name: 'Emerald', minPrice: 19, maxPrice: 33}
                    ]},
                    {name: 'Enchanted Diamond Boots', selected: false, wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Helmet', selected: false, wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Chestplate', selected: false, wantedItems:[
                        {name: 'Emerald', minPrice: 21, maxPrice: 35}
                    ]}
                ]},
                {name: 'Butcher', products:[
                    {name: 'Emerald', selected: false, wantedItems:[
                        {name: 'Raw Chicken', price: 14},
                        {name: 'Raw Porkchop', price: 7},
                        {name: 'Raw Rabbit', price: 4},
                        {name: 'Coal', price: 15},
                        {name: 'Raw Mutton', price: 7},
                        {name: 'Raw Beef', price: 10},
                        {name: 'Dried Kelp Block', price: 10},
                        {name: 'Sweet Berries', price: 10},
                    ]},
                    {name: 'Rabbit Stew', selected: false, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Porkchop', selected: false, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Chicken', selected: false, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]}
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
        },
        changeProduct(index){
            this.currentProductIndex = index;
        }
    }
})

app.mount('#app')