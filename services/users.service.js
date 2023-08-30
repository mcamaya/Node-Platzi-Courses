const { faker } = require('@faker-js/faker');
class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
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

  create(){

  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = UsersService;