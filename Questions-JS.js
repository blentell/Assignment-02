const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoods = userData.map(user => {
  return {
    "id: ": user.id,
    "favoriteFoods: ": user.favorites.food.length,
  }
})
console.log(favoriteFoods)

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizza = userData.reduce((accumulator, user) => {
  // console.log(user.favorites.food)
  if (user.favorites.food.includes('pizza')) {
    return [...accumulator, user.name]  
  }	
  return accumulator;
}, []);
console.log("We like pizza: ", pizza);

// 7. Show us an example of a switch statement being used

switch ("banana") {
  case "strawberry": console.log('red and sweet');
    break;
  
  case "blueberry": console.log('bluish and tangy');
    break;
  
  case "banana": console.log('nasty');
    break;
}