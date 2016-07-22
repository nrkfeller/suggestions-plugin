var Movies = [{
    product: 'Finding Nemo',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51-difUGanL._AA160_.jpg',
    ages: 'all',
    gender:'both'
},{
    product: 'Flushed Away',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61FlyJr-foL._AA160_.jpg',
    ages: 'kid',
    gender:'both'
}, {
    product: 'Animal Friend',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61mvhPkdJkL._AA160_.jpg',
    ages: 'kid',
    gender:'both'
}, {
    product: 'Family Favorites',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61WHZ3H+BSL._AA160_.jpg',
    ages: 'all',
    gender:'both'
}, {
    product: 'Over the Hedge',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61FlyJr-foL._AA160_.jpg',
    ages: 'kid',
    gender:'both'
}, {
    product: 'Frozen',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61vBiNlWJdL._AA160_.jpg',
    ages: 'kid',
    gender:'female'
}, {
    product: 'Super Girl',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61mt8JNbbxL._AA160_.jpg',
    ages: 'kid',
    gender:'female'
}, {
    product: 'Lea',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51wFAhu1L+L._AA160_.jpg',
    ages: 'kid',
    gender:'female'
}, {
    product: 'Avengers',
    image: 'https://images-na.ssl-images-amazon.com/images/I/618cTHuX36L._AA160_.jpg',
    ages: 'kid',
    gender:'male'
}, {
    product: 'X-men',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61nkP51viDL._AA160_.jpg',
    ages: 'kid',
    gender:'male'
}, {
    product: 'Captain America',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61nLpE0yQSL._AA160_.jpg',
    ages: 'kid',
    gender:'male'
},{
    product: 'Harry + Sally',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51kaAG1y8cL._AA160_.jpg',
    ages: 'adult',
    gender:'female'
},{
    product: 'Notting Hill',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51dBlYSvcgL._AA160_.jpg',
    ages: 'adult',
    gender:'female'
},{
    product: '50 dates',
    image: 'https://images-na.ssl-images-amazon.com/images/I/514dxkvKwnL._AA160_.jpg',
    ages: 'adult',
    gender:'female'
},{
    product: 'Die Hard',
    image: 'https://images-na.ssl-images-amazon.com/images/I/515qQyh3P+L._AA160_.jpg',
    ages: 'adult',
    gender:'male'
},{
    product: 'Scarface',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51EeAKSiTgL._AA160_.jpg',
    ages: 'adult',
    gender:'male'
},{
    product: 'Godfather',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51XaNdTqyZL._AA160_.jpg',
    ages: 'adult',
    gender:'male'
},{
    product: 'Interstellar',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51+ZtKxOV0L._AA160_.jpg',
    ages: 'adult',
    gender:'both'
},{
    product: 'Inception',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51GNRpBt30L._AA160_.jpg',
    ages: 'adult',
    gender:'both'
},{
    product: 'The Revenant',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Cdhqk9kWL._AA160_.jpg',
    ages: 'adult',
    gender:'both'
}
];

var Users = [
  {name:"John", gender:"male", age:'adult'},
  {name:"Jane", gender:"female", age:'adult'},
  {name:"Tommy", gender:"male", age:'kid'},
  {name:"Olivia", gender:"female", age:'kid'}
];

function purchased(movie){
  alert(movie.product);
}

var user = Users[1];
var text = "";
var greeting = "";
var i;
greeting += user.name + " is " + user.gender + " and a(n) " + user.age
for (i = 0; i < Movies.length; i++) {
  if (Movies[i].ages === 'all' || user.age === Movies[i].ages) {
    if (Movies[i].gender === "both" || Movies[i].gender === user.gender) {
      text += "<div>"+"<img src="+ Movies[i].image+">"+"</div>"
    }
  }
}

document.getElementById("recom").innerHTML = text;
document.getElementById("greet").innerHTML = greeting;
