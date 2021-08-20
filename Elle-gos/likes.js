// You probably know the "like" system from Facebook and other pages. 
//People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement a function called "likes" that takes an input ("users") which is an array of users who have liked a status. 
//It must return the display as shown in these examples. 

//npm run Elle:likes

let usersList = [];
let counter = 0;

const likes = (users) => {
    if(!users) return console.log("no one likes this")

  usersList = users.split(" ")

  usersList.forEach( ()=> {
    counter++; 
  })

  if(usersList.length > 3) return console.log(`${usersList[0]}, ${usersList[1]} and ${counter - 2} others like this `)
  
  if (usersList.length === 2) return console.log(`${usersList[0]} and ${usersList[1]} like this`) 
  
  if(usersList.length === 1) return console.log(`${usersList[0]} likes this`)
  
  if(usersList.length === 3) return console.log(`${usersList[0]}, ${usersList[1]} and ${usersList[2]} like this`)
}


likes("Max Esteban Elle Alex")
likes () //-- must be "no one likes this"
likes ("Peter") //-- must be "Peter likes this"
likes ("Jacob", "Alex") //-- must be "Jacob and Alex like this"
likes ("Max", "John", "Mark") //-- must be "Max, John and Mark like this"
likes ("Alex", "Jacob", "Mark", "Max") //-- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.
