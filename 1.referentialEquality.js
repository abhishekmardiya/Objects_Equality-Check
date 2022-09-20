const hero1 = {
  name: "Batman",
};

const hero2 = {
  name: "Batman",
};

hero1 == hero1; // => true
hero1 == hero2; // => false

hero1 === hero1; // => true
hero1 === hero2; // => false

Object.is(hero1, hero1); // => true
Object.is(hero1, hero2); // => false
