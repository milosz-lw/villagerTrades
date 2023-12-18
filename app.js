const app = Vue.createApp({
    data(){
        return{
            currentProfession: 'Armorer',
            currentProfessionIndex: 0,
            currentProductIndex: null,
            wantedItemIndex: null,
            professions:[
                {name: 'Armorer', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Coal', price: 15},
                        {name: 'Iron Ingot', price: 4},
                        {name: 'Lava Bucket', price: 1},
                        {name: 'Diamond', price: 1},
                    ]},
                    {name: 'Iron Boots', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Iron Leggings', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Iron Helmet', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: 'Iron Chestplate', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 9}
                    ]},
                    {name: 'Bell', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 36}
                    ]},
                    {name: 'Chainmail Boots', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Leggings', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Chainmail Helmet', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chainmail Chestplate', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Enchanted Diamond Boots', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Leggings', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 19, maxPrice: 33}
                    ]},
                    {name: 'Enchanted Diamond Helmet', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 13, maxPrice: 27}
                    ]},
                    {name: 'Enchanted Diamond Chestplate', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 21, maxPrice: 35}
                    ]}
                ]},
                {name: 'Butcher', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Raw Chicken', price: 14},
                        {name: 'Raw Porkchop', price: 7},
                        {name: 'Raw Rabbit', price: 4},
                        {name: 'Coal', price: 15},
                        {name: 'Raw Mutton', price: 7},
                        {name: 'Raw Beef', price: 10},
                        {name: 'Dried Kelp Block', price: 10},
                        {name: 'Sweet Berries', price: 10},
                    ]},
                    {name: 'Rabbit Stew', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Porkchop', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Cooked Chicken', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]}
                ]},
                {name: 'Cartographer', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Paper', price: 24},
                        {name: 'Glass Pane', price: 11},
                        {name: 'Compass', price: 1},
                    ]},
                    {name: 'Empty Map', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Ocean Explorer Map', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 13, also: 'Compass', alsoPrice: 1}
                    ]},
                    {name: 'Woodland Explorer Map', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 14, also: 'Compass', alsoPrice: 1}
                    ]},
                    {name: 'Item Frame', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Banner', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Globe Banner Pattern', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 8}
                    ]},
                ]},
                {name: 'Cleric', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
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
                    {name: 'Lapis Lazuli', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Glowstone', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Ender Pearl', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: "Bottle o'Enchanting", quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                ]},
                {name: 'Farmer', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
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
                    {name: 'Cake', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Suspicious Stew', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Golden Carrot', quantity: 3, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Glistering Melon Slice', quantity: 6, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]}
                ]},
                {name: 'Fisherman', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'String', price: 20},
                        {name: 'Coal', price: 10},
                        {name: 'Raw Cod', price: 15},
                        {name: 'Raw Salmon', price: 13},
                        {name: 'Tropical Fish', price: 6},
                        {name: 'Pufferfish', price: 4},
                        {name: 'Boat', price: 1}
                    ]},
                    {name: 'Cooked Cod', quantity: 6, wantedItems:[
                        {name: 'Emerald', price: 1, also: 'Raw Cod', alsoPrice: 6}
                    ]},
                    {name: 'Bucket of Cod', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Cooked Salmon', quantity: 6, wantedItems:[
                        {name: 'Emerald', price: 1, also: 'Raw Salmon', alsoPrice: 6}
                    ]},
                    {name: 'Campfire', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 2}
                    ]},
                    {name: 'Enchanted Fishing Rod', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 8, maxPrice: 22}
                    ]}
                ]},
                {name: 'Fletcher', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Stick', price: 32},
                        {name: 'Flint', price: 26},
                        {name: 'String', price: 14},
                        {name: 'Feather', price: 24},
                        {name: 'Tripwire hook', price: 8}
                    ]},
                    {name: 'Arrow', quantity: 16, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Flint', quantity: 10, wantedItems:[
                        {name: 'Emerald', price: 1, also: 'Gravel', alsoPrice: 10}
                    ]},
                    {name: 'Bow', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 2}
                    ]},
                    {name: 'Crossbow', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Enchanted Bow', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 7, maxPrice: 21}
                    ]},
                    {name: 'Enchanted Crossbow', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 8, maxPrice: 22}
                    ]},
                    {name: 'Tipped Arrow', quantity: 5, wantedItems:[
                        {name: 'Emerald', price: 2, also: 'Arrow', alsoPrice: 5}
                    ]}
                ]},
                {name: 'Leatherworker', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Leather', price: 6},
                        {name: 'Flint', price: 26},
                        {name: 'Rabbit Hide', price: 9},
                        {name: 'Scute', price: 4}
                    ]},
                    {name: 'Leather Pants', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Leather Tunic', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 7}
                    ]},
                    {name: 'Leather Cap', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: 'Leather Boots', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Leather Horse Armor', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 6}
                    ]},
                    {name: 'Saddle', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 6}
                    ]}
                ]},
                {name: 'Librarian', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Paper', price: 24},
                        {name: 'Book', price: 4},
                        {name: 'Ink Sac', price: 5},
                        {name: 'Book and Quill', price: 2}
                    ]},
                    {name: 'Enchanted Book', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 5, maxPrice: 64, also: 'Book', alsoPrice: 1}
                    ]},
                    {name: 'Bookshelf', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 9}
                    ]},
                    {name: 'Lantern', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Glass', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Clock', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 5}
                    ]},
                    {name: 'Compass', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Name Tag', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 20}
                    ]}
                ]},
                {name: 'Mason', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Clay Ball', price: 10},
                        {name: 'Stone', price: 20},
                        {name: 'Granite', price: 16},
                        {name: 'Andesite', price: 16},
                        {name: 'Diorite', price: 16},
                        {name: 'Nether Quartz', price: 12}
                    ]},
                    {name: 'Brick', quantity: 10, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Chiseled Stone Bricks', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Dripstone Block', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Polished Granite', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Polished Andesite', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Polished Diorite', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Stained Terracotta', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Glazed Terracotta', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Quartz Pillar', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Block of Quartz', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                ]},
                {name: 'Shepherd', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'White Wool', price: 18},
                        {name: 'Brown Wool', price: 18},
                        {name: 'Black Wool', price: 18},
                        {name: 'Gray Wool', price: 18},
                        {name: 'Dye', price: 12}
                    ]},
                    {name: 'Shears', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 2}
                    ]},
                    {name: 'Wool', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Carpet', quantity: 4, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Bed', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Banner', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 3}
                    ]},
                    {name: 'Painting', quantity: 3, wantedItems:[
                        {name: 'Emerald', price: 2}
                    ]}
                ]},
                {name: 'Toolsmith', products:[
                    {name: 'Emerald', quantity: 1, wantedItems:[
                        {name: 'Coal', price: 15},
                        {name: 'Iron Ingot', price: 4},
                        {name: 'Flint', price: 30},
                        {name: 'Diamond', price: 1}
                    ]},
                    {name: 'Stone Axe', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Stone Shovel', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Stone Pickaxe', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Stone Hoe', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 1}
                    ]},
                    {name: 'Bell', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 36}
                    ]},
                    {name: 'Enchanted Iron Axe', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 6, maxPrice: 20}
                    ]},
                    {name: 'Enchanted Iron Shovel', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 7, maxPrice: 21}
                    ]},
                    {name: 'Enchanted Iron Pickaxe', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 8, maxPrice: 22}
                    ]},
                    {name: 'Diamond Hoe', quantity: 1, wantedItems:[
                        {name: 'Emerald', price: 4}
                    ]},
                    {name: 'Enchanted Diamond Axe', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 17, maxPrice: 31}
                    ]},
                    {name: 'Enchanted Diamond Shovel', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 10, maxPrice: 24}
                    ]},
                    {name: 'Enchanted Diamond Pickaxe', quantity: 1, wantedItems:[
                        {name: 'Emerald', minPrice: 18, maxPrice: 32}
                    ]}
                ]},
                {name: 'Weaponsmith'}
            ]
        }
    },
    methods:{
        changeProfession(e){
            this.currentProductIndex = null
            this.currentProfessionIndex = e.target.options.selectedIndex
            this.currentProfession = e.target.options[e.target.options.selectedIndex].text
            this.wantedItemIndex = null
        },
        changeProduct(index){
            this.currentProductIndex = index
            document.getElementById('wanted-item-amount').value = 0
            document.getElementById('product-amount').value = 0
            this.wantedItemIndex = null
        },
        changeWantedItem(index){
            this.wantedItemIndex = index
            document.getElementById('wanted-item-amount').value = 0
            document.getElementById('product-amount').value = 0
        },
        calculateProductAmount(){
            let productAmount
            if(this.professions[this.currentProfessionIndex].products[this.currentProductIndex].wantedItems[this.wantedItemIndex].price){
                productAmount = Math.floor(document.getElementById('wanted-item-amount').value / this.professions[this.currentProfessionIndex].products[this.currentProductIndex].wantedItems[this.wantedItemIndex].price * this.professions[this.currentProfessionIndex].products[this.currentProductIndex].quantity)
            } else {
                productAmount = Math.floor(document.getElementById('wanted-item-amount').value / document.getElementById('actualPrice').value * this.professions[this.currentProfessionIndex].products[this.currentProductIndex].quantity)
            }
            if (Number.isInteger(productAmount)){
                document.getElementById('product-amount').value = productAmount
            }
        },
        calculateWantedItemAmount(){
            let wantedItemAmount
            if(this.professions[this.currentProfessionIndex].products[this.currentProductIndex].wantedItems[this.wantedItemIndex].price){
                wantedItemAmount = document.getElementById('product-amount').value * this.professions[this.currentProfessionIndex].products[this.currentProductIndex].wantedItems[this.wantedItemIndex].price / this.professions[this.currentProfessionIndex].products[this.currentProductIndex].quantity
            } else {
                wantedItemAmount = document.getElementById('product-amount').value * document.getElementById('actualPrice').value / this.professions[this.currentProfessionIndex].products[this.currentProductIndex].quantity
            }
            if (Number.isInteger(wantedItemAmount)){
                document.getElementById('wanted-item-amount').value = wantedItemAmount
            }
        },
        actualPriceChanged(){
            document.getElementById('product-amount').value = 0
            document.getElementById('wanted-item-amount').value = 0
        }
    }
})

app.mount('#app')
