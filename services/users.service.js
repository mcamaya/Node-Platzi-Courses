const { faker } = require('@faker-js/faker');
class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  async generate(){
    const limit = 40
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
      });
    }
  }

  async create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser
  }

  async find(){
    return this.users;
  }

  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {...user, ...changes};
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return {msg: 'Todo good'};
  }
}

module.exports = UsersService;