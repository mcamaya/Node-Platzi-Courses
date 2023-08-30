const { faker } = require('@faker-js/faker');
class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 25
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.productAdjective(),
        image: faker.image.url()
      });
    }
  }

  create(){

  }

  find(){
    return this.categories;
  }

  findOne(id){
    return this.categories.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = CategoriesService;