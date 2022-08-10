const companies = [
    {name: "Companny One", catergory: "Finance", start: 1981, end: 2003},
    {name: "Companny Two", catergory: "Retail", start: 1992, end: 2008},
    {name: "Companny Three", catergory: "Auto", start: 1999, end: 2007},
    {name: "Companny Four", catergory: "Retail", start: 1989, end: 2010},
    {name: "Companny Five", catergory: "Technology", start: 2009, end: 2014},
    {name: "Companny Six", catergory: "Finance", start: 1987, end: 2010},
    {name: "Companny Seven", catergory: "Auto", start: 1986, end: 1996},
    {name: "Companny Eight", catergory: "Technology", start: 2011, end: 2016},
    {name: "Companny Nine", catergory: "Retail", start: 1981, end: 1989}
]

const age = [32, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Higher-order function's have a function inside them that will return your request..

// Get all object
// forEach - dont return back a new array to a veribal. You have to push it out!
/* const allCompanies = [] 
   companies.forEach( companie => allCompanies.push(companie) )
console.log(allCompanies) */

// Get 21 and over
// filter - dont change the orignal array, but can store your request inside a veriable
    /* const canDrink = age.filter( age => age >= 21)
console.log(canDrink)
console.log( age) */

// Filter out comapnies that have finance as catergory
    /* const financecCompanies = companies.filter( companies => companies.catergory === "Finance" )
console.log(financecCompanies) */

// Fitler out companies that have Retail as catergory and is 10 years from 1980
/* const companiFiltererd = companies.filter( companies => companies.catergory === "Retail")
    .filter( object => object.end -  object.start >= 10 )
console.log( companiFiltererd ) */

// map - dont change orginal array, but map out a new array with the request changes complited
//Create a array of comanies name
/* const companiesName = companies.map( name => name.name)
console.log(companiesName) */
/* const companiesName = companies.map( name => ` [name: ${name.name} start/end ${name.start} - ${name.end}]` )
console.log(companiesName) */

// Double the age of all items inside of the age array
/* const doubleAge = age.map( age => age * 2)
console.log(age)
console.log(doubleAge) */

// sort - Do make change to the array. the sort function also take in parameters ( a, b) 
// I can make a copy first then sort the copy if i want.
// The 1 and -1 is for sorting the list.. true = 1 and means move up. and -1 = false and means move down.
// Here I sort the start date from the copy
/* const newArray = [...companies].sort( ( a, b ) => a.start > b.start ? 1 : -1)
console.log(companies)
console.log( newArray ) */

// sort the age array
/* age.sort( ( a, b ) => a > b ? 1 : -1)
console.log(age) */


// reduce - Do NOT make change to the array. But I can store the response in a variable.
// The sort function also take in parameters ( a, b) and have a start iniziliate sum at the end after a comma
// Total sum of age 
/* const total = age.reduce( (total, a) => total + a, 0 )
console.log( total ) */

// Get the total sum of all companies together
// Make companies-end and companies-start to one newSum. then the reduce start adding the total + newSum. 
// The total + newSum becomes the new total. and so goes the reduce funciton on.
// Remember to add start point for total after the comma...
/* const totalYears = companies.reduce( (total, companies) => total + (companies.end - companies.start), 0 )
console.log(totalYears) */

// Combine all the Higher-order function's
// 1) Map and mulityply all age by 2
// 2) Filter out (remove) all age under 40 
// 3) Sort the list
// 3) Reduce age, find the total sum of the combine list! total + a ( remember the start point for total)

/* const combinedHigherOrderedFunctions = 
    age.map( age => age * 2)
    .filter( age => age >= 40)
    .sort( (a , b) => a + b)
    .reduce( (total, sum) => total + sum , 0 );
    
console.log(combinedHigherOrderedFunctions)
console.log(age) */

// Thanks to Traversy Media - For making a great tutorials https://www.youtube.com/c/TraversyMedia