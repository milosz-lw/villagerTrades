const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            currentProfessionIndex: 0,
            currentProductIndex: null,
            professions:[
                {name: 'Armorer', products:[
                    {name: 'Emerald', wantedItems:[
                        {name: 'Coal', price: 15},
                        {name: 'Iron Ingot', price: 4},
                        {name: 'Lava Bucket', price: 1},
                        {name: 'Diamond', price: 1},
                    ]},
                    {name: 'Iron Boots', wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Iron Leggings', wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Iron Helmet', wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: 'Iron Chestplate', wantedItems:[
                        {name: 'Emerald', price: 9}
                    ]},
                    {name: 'Bell', wantedItems:[
                        {name: 'Emerald', price: 36}
                    ]},
                    {name: 'Chainmail Boots', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Leggings', wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Chainmail Helmet', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Chestplate', wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Enchanted Diamond Boots', wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Leggings', wantedItems:[
                        {name: 'Emerald', minPrice: 19, maxPrice: 33}
                    ]},
                    {name: 'Enchanted Diamond Helmet', wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Chestplate', wantedItems:[
                        {name: 'Emerald', minPrice: 21, maxPrice: 35}
                    ]}
                ]},
                {name: 'Butcher', products:[
                    {name: 'Emerald', wantedItems:[
                        {name: 'Raw Chicken', price: 14},
                        {name: 'Raw Porkchop', price: 7},
                        {name: 'Raw Rabbit', price: 4},
                        {name: 'Coal', price: 15},
                        {name: 'Raw Mutton', price: 7},
                        {name: 'Raw Beef', price: 10},
                        {name: 'Dried Kelp Block', price: 10},
                        {name: 'Sweet Berries', price: 10},
                    ]},
                    {name: 'Rabbit Stew', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Porkchop', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Chicken', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]}
                ]},
                {name: 'Cartographer', products:[
                    {name: 'Emerald', wantedItems:[
                        {name: 'Paper', price: 24},
                        {name: 'Glass Pane', price: 11},
                        {name: 'Compass', price: 1},
                    ]},
                    {name: 'Empty Map', wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Ocean Explorer Map', wantedItems:[
                        {name: 'Emerald', price: 13}
                    ]},
                    {name: 'Woodland Explorer Map', wantedItems:[
                        {name: 'Emerald', price: 14}
                    ]},
                    {name: 'Item Frame', wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Banner', wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Globe Banner Pattern', wantedItems:[
                        {name: 'Emerald', price: 8}
                    ]},
                ]},
                {name: 'Cleric', products:[
                    {name: 'Emerald', wantedItems:[
                        {name: 'Rotten Flesh', price: 32},
                        {name: 'Gold Ingot', price: 3},
                        {name: "Rabbit's Foot", price: 2},
                        {name: 'Scute', price: 4},
                        {name: 'Glass Bottle', price: 9},
                        {name: 'Nether Wart', price: 22},
                    ]},
                    {name: 'Redstone Dust', quantity: 2, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Lapis Lazuli', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Glowstone', wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Ender Pearl', wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: "Bottle o'Enchanting", wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                ]},
                {name: 'Farmer', products:[
                    {name: 'Emerald', wantedItems:[
                        {name: 'Wheat', price: 20},
                        {name: 'Potato', price: 26},
                        {name: 'Carrot', price: 22},
                        {name: 'Beetroot', price: 15},
                        {name: 'Pumpkin', price: 6},
                        {name: 'Melon', price: 4},
                    ]},
                    {name: 'Bread', quantity: 6, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Pumpkin Pie', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Apple', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cookie', quantity: 18, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Cake', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Suspicious Stew', wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Golden Carrot', quantity: 3, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Glistering Melon Slice', quantity: 6, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]}
                ]},
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
            this.currentProductIndex = null
            this.currentProfessionIndex = e.target.options.selectedIndex
            this.currentProfession = e.target.options[e.target.options.selectedIndex].text
        },
        changeProduct(index){
            this.currentProductIndex = index
        }
    }
})

app.mount('#app')