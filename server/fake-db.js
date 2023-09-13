const Product = require('./model/product')

class FakeDb{
    constructor(){
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heding1: 'サンプルテキスト１',
                heding2: 'サンプルテキスト２',
                heding3: 'サンプルテキスト３',
                hedingtext1: '詳細１',
                hedingtext2: '詳細２',
                hedingtext3: '詳細３',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heding1: 'サンプルテキスト１',
                heding2: 'サンプルテキスト２',
                heding3: 'サンプルテキスト３',
                hedingtext1: '詳細１',
                hedingtext2: '詳細２',
                hedingtext3: '詳細３',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heding1: 'サンプルテキスト１',
                heding2: 'サンプルテキスト２',
                heding3: 'サンプルテキスト３',
                hedingtext1: '詳細１',
                hedingtext2: '詳細２',
                hedingtext3: '詳細３',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone special',
                price: 999,
                description: '',
                heding1: 'サンプルテキスト１',
                heding2: 'サンプルテキスト２',
                heding3: 'サンプルテキスト３',
                hedingtext1: '詳細１',
                hedingtext2: '詳細２',
                hedingtext3: '詳細３',
              }
        ]
    }

    async initDb(){
      await this.cleanDb()
      this.pushProductsToDb()
    }

    async cleanDb() {
      await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }

}

module.exports = FakeDb