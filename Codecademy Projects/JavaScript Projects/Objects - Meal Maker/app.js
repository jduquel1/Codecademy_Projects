const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `You order is ${appetizer.name}, ${main.name} and ${dessert.name}, and it costs \$${totalPrice}.`;
    },
};

menu.addDishToCourse('appetizers', 'Sticky Baked Chicken Wings', 5.35);
menu.addDishToCourse('appetizers', 'Crab Cakes with Horseradish Cream', 7.25);
menu.addDishToCourse('appetizers', 'Caramelized Onion Dip', 9.50);

menu.addDishToCourse('mains', 'Beef Stroganoff', 15.25);
menu.addDishToCourse('mains', 'Burger', 13.75);
menu.addDishToCourse('mains', 'Casserole', 12.75);

menu.addDishToCourse('desserts', 'Banana Split', 8.00);
menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
menu.addDishToCourse('desserts', 'Churro', 6.75);

const meal = menu.generateRandomMeal();
console.log(meal);
