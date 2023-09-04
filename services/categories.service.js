const { faker } = require('@faker-js/faker');
class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  async generate(){
    const limit = 25
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.productAdjective(),
        image: faker.image.url()
      });
    }
  }

  async create(data){
    const newCategory = {
      id: faker.string.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async find(){
    return this.categories;
  }

  async findOne(id){
    return this.categories.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {...category, ...changes};
    return category;
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return {msg: 'Todo good'};
  }
}

module.exports = CategoriesService;