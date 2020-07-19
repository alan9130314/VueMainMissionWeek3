/* global Vue */
/* eslint-disable no-new */

new Vue({
    el: '#app',
    data: {
        products: [{
                id: 1586934917210,
                unit: '台',
                category: '掌上主機',
                title: 'Switch',
                origin_price: 20000,
                price: 9980,
                description: '想玩就玩',
                content: '動森太好玩惹',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
            {
                id: 1196934917910,
                unit: '台',
                category: '主機',
                title: 'PS5 Wifi',
                origin_price: 29999,
                description: '次世代超強規格',
                content: '我也想要換一台 PS5 Wifi',
                price: 9487,
                is_enabled: 0,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
            {
                id: 01,
                unit: '杯',
                category: '咖啡',
                title: '黑咖啡',
                origin_price: 50,
                description: '美式黑咖啡',
                content: '正宗標準美式咖啡Americano，必須是義式濃縮咖啡混合熱水',
                price: 35,
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1524686788093-aa1f9c0f7c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Njg3fQ',
            },
        ],
        tempProduct: {},
    },

    methods: { // 宣告方法集
        updateProduct() { // 更新產品的函式
            if (this.tempProduct.id) { //   若產品id存在 就做更新產品的動作
                const id = this.tempProduct.id; // 取得該產品id
                this.products.forEach((item, i) => { // 遍歷所有產品 取得跟 products item 跟 i
                    if (item.id === id) { //   如果item的 id 跟 該產品的id 一樣時                        
                        this.products[i] = this.tempProduct; // 更新products的該筆資料 其更新的資料為 tempProduct的資料
                    }
                });

            } else { //   若產品id不存在 就做新增產品
                // Unix Timestamp
                const id = new Date().getTime(); //   取得時間戳記作為id
                this.tempProduct.id = id;
                this.products.push(this.tempProduct); //   將新增的產品push進 products
            }
            this.tempProduct = {}; // 清空tempProduct
            $('#productModal').modal('hide'); // 隱藏modal
        },
        openModal(isNew, item) {
            switch (isNew) { //   判斷 isNew傳入的參數
                case 'new': // isNew為new 做新增 
                    this.tempProduct = {}; // 清空tempProduct
                    $('#productModal').modal('show');
                    break;
                case 'edit': // isNew為edit 做編輯
                    // 淺層複製傳入的item 有參考關係
                    // 可改用深層複製 JSON.parse(JSON.stringify(item))
                    this.tempProduct = Object.assign({}, item);
                    $('#productModal').modal('show');
                    break;
                case 'delete': // isNew為delete 做刪除
                    // 淺層複製傳入的item 有參考關係
                    // 可改用深層複製 JSON.parse(JSON.stringify(item))
                    $('#delProductModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        delProduct() {
            if (this.tempProduct.id) { // 判斷是否存在
                const id = this.tempProduct.id; // 定義id
                this.products.forEach((item, i) => { // 將所有產品遍歷找出相同的id的產品
                    if (item.id === id) {
                        this.products.splice(i, 1); // 移除products產品
                        this.tempProduct = {}; // 清空暫存的產品
                    }
                });
            }
            $('#delProductModal').modal('hide');
        },
    },
});