// // //increment 

// // //var myVar = 87;
// // var x =0;
// // myVar = myVar+1;
// // x=(myVar--);
// // //console.log(myVar)
// // //console.log(x)
// // //decimal numbers

// // var ourDecimal = 2.5;


// // var myDecimal = 2.0;
 
// // //console.log(ourDecimal*myDecimal)

// // var t = 4.4/2.2;
// // //console.log(t)

// // var remainder
// // remainder = 11%3;
// // //console.log(remainder)

// // var a = 3;

// // a+=3;
// // //console.log(a)
// // a-=4
// // //console.log(a)
// // a*=3
// // a/=2
// // //console.log(a)

// // var myFirstName = 'daniel';
// // //console.log(myFirstName);

// // var myString ="my name is daniel \" is daniel atego for those "
// // //console.log(myString)
// // var myStr = `'<a href ="http://www.example.com"\f target="_blank"Link</a>'`;
// // //console.log(myStr)
// // myStr= "FirstLine\n\t\\SecondLine\nThirdLine"
// // //console.log(myStr)
// // //concatenating strings with plus operator
// // var ourStr = "I come first. " + "I come second"
// // var myStr ="This is the start. " + "This is the end."

// // //concatenating strings with the plus equals operator
// // ourStr = "I come first. ";
// // ourStr += "I come second."
// // //console.log(ourStr)

// // myStr = "This is the first sentence. "
// // myStr += "This is my second sentence."
// // //console.log(myStr)

// // //constructing strings with variables

// // var ourName = "freeCodeCamp";
// // ourStr = "Hello, our name is "+ ourName+ " how are you?";

// // var myName= "Daniel";
// // myStr =" My name is "+ myName + " and I am well";
// // //console.log(myStr)

// // //Appending variables to strings
// // var anAdjective = "awesome";
// // ourStr = "freeCodeCamp is ";
// // ourStr += anAdjective;

// // var someAdjective = "fun";
// // myStr = "Learning to code is "
// // myStr += someAdjective;
// // //console.log(ourStr)
// // //console.log(myStr)

// // //finding length of string
// // var firstNameLength = 0;
// // var firstName = "Ada";

// // firstNameLength = firstName.length


// // var lastNameLength = 0;
// // var lastName ="Lovelace"

// // lastNameLength =lastName.length
// // //console.log(firstNameLength, lastNameLength)

// // //Bracket Notation to find first character in String
// // var firstLetterOfFirstName = ""
// // firstName = "Ada";

// // firstLetterOfFirstName = firstName[0];

// // var firstLetterOfLastName = "";
// // var lastName = "iLovelace";

// // firstLetterOfLastName = lastName[0]
// // //console.log(firstLetterOfFirstName, firstLetterOfLastName)

// // //String Immutability
// // myStr = "Jello World";

// // myStr= "Hello World";
// // //console.log(myStr)

// // //Bracket Notation to Find the Nth character in String
// // firstName = "Ada";
// // var secondLetterOfFirstName = firstName[1]
// // lastName = "Lovelace";
// // var thirdLetterOfLastName = lastName[2];
// // //console.log(secondLetterOfFirstName,thirdLetterOfLastName)

// // //Bracket notation to find the last character in a string
// // firstName = "Ada";
// // var lastLetterOffFirstName = firstName[firstName.length-1]

// // lastName = "Lovelace";
// // var lastLetterOfLastName= lastName[lastName.length-1]
// // //console.log(lastLetterOfLastName, lastLetterOffFirstName)

// // //Bracket Notation to find nth-to-last character is string
// // var firstName = "Ada";
// // var thirdToLastLetterOfFirstName = firstName[firstName.length-3]

// // lastName = 'Lovelace';

// // var secondToLastLetterOfLastName = lastName[lastName.length-2];
// // //console.log(thirdToLastLetterOfFirstName,secondToLastLetterOfLastName)

// // //Word Blanks
// // function wordBlanks(myNoun, myAdjective,myVerb,myAdverb){
// //     var result="";
// //     result+= "The "+myAdjective+" " +myNoun+ " " +myVerb+ " " +"to the store "+ myAdverb

// //     return result;
// // }
// // //console.log(wordBlanks("cloud","quiet","jump","loudly"));
// // //store multiple values with arrays

// // var ourArray =["John",23];

// // var myArray = ["Q", "r3", 67]
// // //console.log(myArray.length)

// // //Nested Array
// // ourArray = [["the universe", 42],["everything",101010]]
// // //console.log(ourArray.length)
// // myArray = [["the lazy boy", "is at home"],[34,23]]
// // //console.log(myArray.length)

// // //Access Array Data with Indexes
// // ourArray = [50,60,70];
// // var ourData = ourArray[2];
// // //console.log(ourData)

// // //Modify Array Data With Indexes
// // ourArray = [18,64,99];
// // ourArray[2] = 94;
// // //console.log(ourArray);

// // myArray =["myy name",34,"d"]
// // myArray[1][0]=1;
// // //console.log(myArray)

// // //Access Multidimensional Arrays With Indexes
// // var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
// // var myData = myArray[3][0][2];
// // //console.log(myData)

// // //Manipulate Arrays with push()
// // ourArray =["Stimpson","J","Cat"];
// // ourArray.push(["happy","joy"]);
// // //console.log(ourArray[3][1]);

// // myArray = [["John", 23],["cat",2]];
// // myArray.push("some cats in wendani are loud")
// // //console.log(myArray)

// // //Manipulate Arrays with pop()
// // ourArray =[1,2,3];
// // var removedFromOurArray= ourArray.pop()//removes ther last value in the array leaving the array minus the last element i.e n-1
// // //console.log(removedFromOurArray)
// // //console.log(ourArray)

// // myArray =[["John",23],["cat", 2]];
// // var removedFromMyArray = myArray.pop()
// // //console.log(removedFromMyArray)
// // //console.log(myArray)

// // //Manipulate Arrays with shift()

// // ourArray = ["Stimpson","J",["cat"]]
// // removedFromOurArray = ourArray.shift()//removes the first variable of an array that is the [0] element
// // //console.log(ourArray,removedFromOurArray)

// // //Manipulate Arrays with unshift()
// // ourArray =["Stimpson", "J","cat"];
// // ourArray.shift();
// // //console.log(ourArray);
// // ourArray.unshift("Happy"); // the unshift function undoes what the shift function does it appends a variable into the first element of the array
// // //console.log(ourArray)

// // //Shopping list
// // var myList = [["cereal",3],["bananas",7],["oranges",5]];

// // //Write Reusable Code with Functions
// // function ourReusableFunction(){
// //     console.log("Heyya, World");
// // }
// // //ourReusableFunction();

// // function reusableFunction(){
// //     console.log("Hi World")
// // }
// // //reusableFunction()

// // //Passing values to functions with Arguments

// // function ourFunctionWithArgs(a,b){
// //     console.log(a-b)
// // }
// // //ourFunctionWithArgs(56,100)

// // function ourFunctionWithArgs(a,b){
// //     console.log(a*b)
// // }
// // //ourFunctionWithArgs(56,100)

// // //Global Scope and Functions

// // var myGlobal=10;

// // function fun1(){
// // oopsGlobal = 5; /*if you omitt the var key word in 
// // the declaration of a variable but you assign a value
// //  to it, it automatically becomes a global variable.

// // */
// // }

// // function fun2(){
// //     var output = "";
// //     if (typeof myGlobal != "undefined"){
// //         output += "myGlobal: " + myGlobal;
// //     }
// //     if(typeof oopsGlobal != "undefined"){
// //         output += "oopsGlobal: " + oopsGlobal;

// //     }
// //     //console.log(output);
// // }
// // fun1();
// // fun2();

// // local scope and functions
// // var myVar = 5;
// // function myLocalScope(){
    
// //     console.log(myVar);
// // }
// // myLocalScope();

// // console.log(myVar);

// // Global vs. Local Scope in Functions
// var outerWear = "T-shirt";

// // function myOutfit(){
// //     var outerWear = 'sweater'
// //     return outerWear;
// // }
// // console.log(myOutfit());

// // Return a value from a function with return

// // function minusSeven(num){
// //     return num -7;
// // }
// // console.log(minusSeven(67));

// // function timesFive(num){
// //     return num*5
// // }
// // console.log(timesFive(76));

// //Understanding Undefined VAlues Returned from a Function
// // var sum= 0;
// // function addfive(){
// //     sum=sum+5;
// //     return sum;
// // }
// // console.log(addfive())

// //Assignment with a Returned Value

// // var changed = 0;
 
// // function change(num){
// //     return (num + 5)/3;
// // }
// // changed = change(10)

// // var processed = 0 ;

// // function processArg(num){
// //     return (num + 3)/5;
// // }
// // processed = processArg(11)
// // console.log(processed)

// //Stand in Line
// // function nextInline(arr, item){
// //     console.log(arr)
// //     arr.push(6);
// //     //console.log(arr);
// //     var item = arr[0];
// //     return arr.shift();
// // }
// // var testArr = [1,2,3,4,5]

// // console.log("Before: " + JSON.stringify(testArr));
// // console.log(nextInline(testArr,6));
// // console.log("After: " + JSON.stringify(testArr));

// // //Boolean Values
// // function welcomeToBooleans(){
// //     return false;
// // }

// //Use Conditional Logic with If Statements
// // var isItTrue= true;
// // function ourTrueOrFalse(isItTrue){
// //     if (isItTrue){
// //         return "Yes, its true";
// //     }
// //     return "No, its false"
    
// // }
// // console.log(ourTrueOrFalse(isItTrue))
// // function trueOrFalse(wasThatTrue){

// // }

// //equality operator
// function testEqual(val){
//     if (val==='12'){
//         return "Equal";
//     }
//     return "Not Equal"
// }

// console.log(testEqual(10+2))

//Comparison with the Strict Equality Operator

// function testStrict(val){
//     if (val===0.100){
//         return "Equal";
//     }
//     return "Not Equal";
// }

// var t = testStrict(.10)
// console.log(t)

//Practice Comparing Different Values

// function compareEquality(a,b){
//     if (a== b){
//         return "Equal";
//     }
//     return "Not Equal";
// }
// console.log(compareEquality('A','a'))

//Comparison with the Inequality Operator

// function testNotEqual(val){
//     if (val!==99){
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqual('99'))

//Comparison with the Strict Inequality Operator

// function testStrictNotEqual(val){

//     if (val!==10){
//         return "Not Equal"
//     }
//     return "Equal";
// }
// console.log(testStrictNotEqual('10.00'))

//Comparison with the Logical And Operator

// function testGreaterThan(val){
//     if (val>100){
//         return "Over 100";
//     }
//     if (val>10){
//         return "Over 10";
//     }
//     return "10 or Under"
// }

// console.log(testGreaterThan(56))

//Comparison with the Greater Than Or Equal To Operator

// function testGreaterOrEqual(val){
//     if (val == 20 || val > 20){
//         return "20 or Over"
//     }
//     if (val == 10 || val > 10){ // >= greater or equal to
//         return "10 or Over"
//     }
//     return "Less than 10";

// }
// console.log(testGreaterOrEqual(10))

//Comparison with the Less Than Operator

// function testLessThan(val){
    
// //Comparison with the less than or equal to operator
// function testLessOrEqual(val){
//     if (val<=12){
//         return "Smaller Than or Equal to 12"
//     }
//     if (val<24){
//         return "Smaller Than or Equal to 24"
//     }
//     return "More Than 24";
// }
// console.log(testLessOrEqual(10))

//Comparison with the Logical And Operator

// function testLogicalAnd(val){

//     if (val>=10 && val<19){
        
//             return "Yes";
//         }
    
//     return "No";
// }
// console.log(testLogicalAnd('10'))

//Comparison with the Logical Or Operator

// function testLogicalOr(val){
// if (val < 10 || val > 20){
//     return "Outside"
// }
// return "Inside"
// }
// // console.log(testLogicalOr(14))

// //Else

// function testElse(val){
//     var result = "";

//     if (val>5){
//         result = "Bigger than 5";
//     }
//     else {
//         result = "5 or smaller";
//     }
//     return result;
// }
// console.log(testElse(3))

//Else If Statements

// function testElseIf(val){
//     if (val>10){
//         return "Greater than 10";
//     }
//     if (val < 5){
//         return "Smaller than 5";
//     }
//     else if (val => 5 || val <= 10){
//         return "Between 5 and 10"
//     }
// }
// console.log(testElseIf(7))

//Logical Order in If Else Statements
// function orderMylogic(val){
//     if (val<5){
//         return "Less than 5"
//     }
//     else if ( val < 10){
//         return "Less than 10"
//     }
//     else {
//         return "Greater than or equal to 10"
//     }
// }
// console.log(orderMylogic(2))

//Chaining If Else Statements

// function testSize(num){
//     if (num<5){
//         return "tiny";
//     }
//     else if (num < 10 )
//     { return "Small"}
//     else if (num<15)
//     { return "Medium"}
//     else if (num < 20)
//     { return "Large"}
//     else {return "Huge"}
// }

// console.log(testSize(7))

//Golf Code 1.27.49

// var names = ["Hole-in-one", "Eagle", "Birdie","Par", "Bogey", "Double-Bogie","Go-Home"]
// function golfScore(par,strokes){
//     if (strokes == 0){
//         return "start game"
//     }
//     if (strokes == 1){
//         return names[0]
//     }
//     else if (strokes <= par-2){
//         return names[1]
//     }
//     else if (strokes == par-1){
//         return names[2]
//     }
//     else if (strokes <= par){
//         return names[3]
//     }
//     else if (strokes <= par+1){
//         return names[4]
//     }
//     else if (strokes <= par+2){
//         return names[5]
//     }
//     else {
//         return names[6]
//     }
// }
// console.log(golfScore(5,1))

//switch statements and Default Option in Switch Statements

// function caseInSwitch(val){
//     var answer =""
//     switch(val){
//         case 1:
//             answer = "alpha"
//             break;
//         case 2:
//             answer = 'beta'
//             break;
//         case 3:
//             answer = "gamma"
//             break;
//         case 4:
//             answer = "delta"
//             break;
//         default:
//             answer = "stuff"
//             break;
//     }
//     return answer
// }
// console.log(caseInSwitch(4));

//Multiple Identical Option in Switch Statements

// function sequential(val){
//     var answer = "";
//     switch (val){
//         case 1:
//         case 2:
//         case 3:
//             answer ="Low"
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer ="Mid"
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer ="High"
//             break;
//     }
//     return answer;
// }

// console.log(sequential(7));

// Replacing if else chains with switch

// function chainToSwitch(val){
//     var answer = "";
//     switch (val){
//     case "bob":
//         answer = "Marley"
//         break;
    
//     case 42:
//         answer = "The Answer"
//         break;
//     case 1:
//         answer = "There is no #1";
//         break;
//     case 7:
//         answer = "Ate Nine"
//         break;
//     }
//     return answer

// }
// console.log(chainToSwitch(7))

//Returning Boolean Values from Functions

// function isLess(a,b){

//     return  (a < b)
// }
// console.log(isLess(10,15));

//Returning Early Pattern from Functions


// function abTest(a,b){
//     if (a<0 || b<0){
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
// }
// console.log(abTest(2,-2));

//counting cards

// var count = 0;

// function cc(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "k":
//         case "A":
//             count--;
//             break;

        
//     }
//     var holdbet = 'Hold'
//     if (count > 0){
//         holdbet = "Bet"
//     }
//     return count + " " +holdbet;
// }
// cc(2);cc(10);cc('k');cc('k');cc('A');
// console.log(cc(4))

// Build JavaScript Objects
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends":[]
// }

//Accessing Object Properties with Dot Notatio
//dot method to access object property values
// var testObj = {
//     "hat":"ballcap",
//     "shirt":"jersey",
//     "shoes":"cleats"
// }
// var hatValue = testObj.hat
// var shirtValue = testObj.shirt

// console.log(hatValue, shirtValue)

//Accessing Object Properties with Bracket Notation
// Using bracket notation , normally used when ther 
//is a space between an objects property name

// var testObj = {
//     "an entree":"hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// }

// var entreeValue = testObj["an entree"]

// console.log(entreeValue)

//Accessing Object Properties with Variables

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unaitas"
// }
//  var playerNumber = 16
//  var player = testObj[playerNumber]

//  console.log(player , playerNumber)

// Updating Object Properties

// var ourDog ={
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// }
// ourDog.name = " Happy Camper"

// console.log(ourDog)

// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// myDog["legs"]= 6

// console.log(myDog)

//Add New Properties to an Object

// var ourDog ={
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"]
//     }
//     ourDog.bark = "woof woof"
    
// console.log(ourDog)

// Delete Properties From an Object

// var ourDog ={
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// }
// delete ourDog.bark 
    
// console.log(ourDog)

//Using Objects for Lookups

// function phoneticLookup(val){
//     var result = val;
//     var lookup ={
//         "alpha":"Adams",
//         "bravo":"Boston",
//         "charlie":"Chicago",
//         "delta":"Denver",
//         "echo":"Easy",
//         "foxtrot":"Frank"
//     };
//     console.log(result)
//     return  lookup[result]
    
//     // switch(val){
//     //     case "alpha":
//     //         result = "Adams";
//     //         break;
//     //     case "bravo":
//     //         result = "Boston";
//     //         break;
//     //     case "charlie":
//     //         result = "Chicago";
//     //         break;
//     //     case "delta":
//     //         result = "Denver";
//     //         break;
//     //     case "echo":
//     //         result = "Easy";
//     //         break;
//     //     case "foxtrot":
//     //         result = "Frank";
        
//     // }
// }
// console.log(phoneticLookup('charlie'))

//Testing Object for Properties

// var myObj = {
//     gift : "pony",
//     pet : "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp){

//     if (myObj.hasOwnProperty(checkProp)){
//         return myObj[checkProp];
//     }else{
//         return "Not Found"
//     }
    
// }
// console.log(checkObj("gifit"));

//Manipulating Complex Objects

// var myMusic = [
//     {
//         "artist":"Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold":true
//     },
//     {
//         "artist": "Stephen Moses",
//         "title": "Raising Sons",
//         "release_year": 1994,
//         "formats": [
//             "CD",
//             "DVD",
//             "BLUE RAY"
//         ],
//         "gold": true
//     }

// ]

// Accessing Nested Objects

// var myStorage = {
//     "car": {
//         "inside":{
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk":"jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"]
// console.log(gloveBoxContents)

//Accessing Nested Arrays

// var myPlants = [ 
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulips",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ]

// var secondTree = myPlants[1].list[1];
// console.log(secondTree)

// // Record Collection
// var collection = {
//     "2548":{
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks":[
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468":{
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245":{
//         "artist": "Robert Palmer ",
//         "tracks":[]
//     },
//     "5439":{
//         "album":"ABBA Gold"

//     }
// }
// //keep a copy of the collection gor tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id,prop, value){

//     if (value === ""){
//         delete collection[id][prop]
//     }else if (prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }else {
//         collection[id][prop]=value;
//     }
     
//     return collection;
// }

// // Alter values below to test your code
// console.log(updateRecords(2468,"tracks","test"))
// console.log(updateRecords(5439,"artist","ABBA"));

//Iterate with While Loops

// var myArray =[];
// var i = 0 ;
// while ( i < 5 ){
//     myArray.push(i)
//     i++;
// }
// console.log(myArray)

//Iterate with for loops

// var ourArray = [];

// for ( var i = 0; i < 5; i++){
//     ourArray.push(i);
// }
// console.log(ourArray)

//Iterate Odd Numbers with a For Loop


// var ourArray = [];

// for(var i = 0; i<10;i+=2){
//     ourArray.push(i)
// }
// console.log(ourArray)

//Count Backwords with a For Loop

// var myArray=[];
// for (i =10;i>0;i--){
//     myArray.push(i);
// }
// console.log(myArray)

//Iterate Through an Array with a For Loop

// var myArray = [1,4,5,2,5,7,"mary"];
// for (i = 0; i< myArray.length;i++){
//     console.log(myArray[i])
// }

//Nesting For Loops

// function multiplyAll(arr){
//     var product = 1;
//     for (var i = 0; i< arr.length; i++){
//         for (r = 0; r < arr[i].length;r++){
//             product*=arr[i][r];
//         }
//     }

//     return product ;

// }
// var product = multiplyAll([[1,2],[3,4],[5,6,7]])
// console.log(product)

//Iterate with Do... While Loops

// var myArray = [ ];
// var i = 10;

// do{
//     myArray.push(i);
//     i++;
// } while (i< 5)
// console.log(i, myArray);

//Profile Lookeup

// var contacts = [
//     {
//         "firstName ": "Akira",
//         "lastName ": "Laine",
//         "number ": "45465568525",
//         "likes": ['pizza', "Coding", "Brownie Points"]
//     },
//     {
//         "firstName ": "Harry ",
//         "lastName ": "Potter",
//         "number ": "45465565525",
//         "likes": ['Hogwarts', "Magic", "Hagrid"]
//     },
//     {
//         "firstName ": "Sherlock ",
//         "lastName ": "Holmes",
//         "number ": "45465578525",
//         "likes": ['Intriguing Cases', "Violin"]
//     },
//     {
//         "firstName ": "Christian",
//         "lastName ": "Vos",
//         "number ": "unknown",
//         "likes": ['JavaScript', "Gaming ", "Foxes"]
//     }
//  ]
//  function lookUpProfile(name, prop){
//     for( i = 0; i < contacts.length; i++){
//         if (name == contacts[i]["firstName "]){
//             return contacts[i][prop] || "no such property"

//         }
        
//     }

//  }

//  var data = lookUpProfile("Akira","likes");
//  console.log(lookUpProfile("Akira","lijkes"))

//Generate Random Fractions

// function randomFraction(){

//     return Math.random();
// }
// console.log(randomFraction())

// //  Generate Random Whole Numbers

// var randomNumbersBetween0and19 = Math.floor(Math.random()*20);
// console.log( randomNumbersBetween0and19)

//Generate Random Numbers within a Range

// function ourRandomRange(ourMin, ourMax){
//     return Math.floor(Math.random()*(ourMax - ourMin)) + ourMin
// }

// console.log(ourRandomRange(55,50));
// console.log(5-3+1)

//Use the parseInt Function

// function convertToInteger(str){

//     return parseInt(str)
// }
// console.log(convertToInteger('56'));

// Use the parseInt Function with a Radix 

// function convertToInteger(str){

//     return parseInt(str,2)//it is automatically converted to base 10, the 2 indicates its base (binary)
// }
// console.log(convertToInteger('10011'));

// Use the Conditional (Ternary) Operator

// function checkEqual(a,b){
//    return (a===b) ? true: false;
// }
// console.log(checkEqual(1,2))

// Use Multiple Conditional (Ternary) Operators

// function checkSign(num){

//     return num>0 ? 'positive': num<0? 'negative':'zero'

// }

// console.log(checkSign(0));

//differences between var and let
// "use strict"; //only declared variables will be used in this case quota is used undeclareds hence
//it will generate an error
// var catName = 'Quincy';
// var quote;
// var fibonacci;

// var catName = 'Beau'; //let does not allow you to declare a variable twice

// function catTalk(){

//     catName = "Oliver";
//     quota = catName+" says Meow!";
//     return quota;
// }
// console.log(`${catName} says Hello`)
// console.log(catTalk());

//Compare scopes of the var and let Keywords

// function checkScope (){
// "use strict";
//     //let i = "function scope" // let is scope defined
//     if (true){
//          let i = "block scope";
//         console.log("Block scope i is: ", i)
//     } 
//     console.log('function scope i is: ', i)
//     return i;
// }
// checkScope();

//Declare a Read-Only Variable with the const Keyword

// function printManyTimes(str){
//     "use strict";
//     const sentence = str + " is cool";
//     /*a const is scope defined 
//     it is read only
//     i.e you cannot reassign a const
//     it is good practice to  to capitalize constants */
//     sentence = str + " is amazing";
//     for (var i = 0; i < str.length; i+=2){
//         console.log(sentence);
//         console.log(sentence);
//     }
// }
// printManyTimes("freeCodeCamp");

//Mutate an Array Declared with const

// const s = [ 5,7,2];
// function editInPlace(){
//     "use strict";

//     //s = [ 2,5,7]; is read-only hence the erro
//     s.push(3);
//     s[2]=9;
//     console.log(s)
// }
// editInPlace();

//Prevent Object Mutation

// function freezeObj(){
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI:3.14
//     };
    

//     Object.freeze(MATH_CONSTANTS);
//     try {
//         MATH_CONSTANTS.PI = 99;
//     }catch (ex){
//         console.log(ex)
//     }
//     return MATH_CONSTANTS.PI
// }
// const PI = freezeObj();
// var MATH_CONSTANTS ={
//     PIY :PI, 
// }
// console.log(PI);
// console.log(MATH_CONSTANTS.PI)

//Use Arrow Functions to Write Concise Anonymous Functions

// var magic = ()=>new Date();

//Write Arrow Functions with Parameters

//  var myConcat = (arr1,arr2)=>arr1.concat(arr2)
//  console.log(myConcat([1,3],[2,6,4]))

//Write Higher Order Arrow Functions

// const realNumberArray = [ 4, 5.6,-9.8,3.14,42,6,8.34,-2];
// const squareList = (arr) => {
  
//     const squaredIntegers = arr.filter(num => Number.isInteger(num)&& num>0).map(x => x*x);
//     return squaredIntegers;
// }
// const squaredIntegers = squareList(realNumberArray)
// console.log(squaredIntegers);

//write higher order arrow functions

// const increment = (function(){
//     return function increment(number=1,value=1){
//         return number + value;
//     };
// })();
// console.log(increment (5,2));
// console.log(increment(5));
// console.log(increment());

//Use the Rest Operator with Function Parameters

// const sum = (function(){
//     return function sum (...aorgs){//thie is the rest of operator it take in any number of inputs the name of this inputs in our case is aorgs
//         return aorgs.reduce((a,b)=>a*b,1);
//     };
// })();
// console.log(sum(1,2,3))

// Use the Spread Operator to Evaluate Arrays In-Place

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 ;
// (function(){
//     arr2 = arr1;//this is not a copy operation 
//     //but it is a pointer such that the preceeding statement
//     //changes the affected values in both arrays
//     // the spread operator is used to make a copy of the array
//     arr2 = [...arr1]; //this makes a copy of array1
//     arr1[0] = 'potato';
// })();
// console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Objects

// var voxel = {'x': 3.6,y: 7.4, z:6.54};

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// var {x:a,y:b,z:c}=voxel; //destructuring syntax

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow:79
// };

// function getTempOfTmrw(avgTemperatures){
//     "use strict";

//     const {tomorrow:tempOfTomorrow}  = avgTemperatures;
//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES))

//Destructuring Assignment with Nested Objects

// const LOCAL_FORECAST = {
//     today: {min: 72, max: 83},
//     tomorrow: {min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";
    
//     const {tomorrow:{max:maxOfTomorrow }} = forecast;
    
//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use Destructuring Assignment to Assign Variables from Arrays

// const [z,x, , , y] = [7,2,3,4,5,6];

// console.log(z,x,y);

// let a = 8, b = 6;

// (() => {
//     "use strict";
//     [a,b] = [b,a];
// }) ();
// console.log(a);
// console.log(b);

//Use Destructuring Assignment with Rest Operator

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo (list){
//     const [,,, ...arr] = list;
    
//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameter


// const stats = {
//     max: 56.78,
//     standard_deviation : 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// }; 

// const half = (function(){
//     return function half({max,min}){//this is where destructuring takes place
//         return (max + min)/2.0;
//     };
// } )();
// console.log(stats);
// console.log(half(stats));

// Create String using Template Literals

// const person = {
//     name: "Zodiad Hasbro",
//     age: 50
// };

// const greeting = `Hello my name is ${person.name}!
// I am ${person.age} years old.`;
// console.log(greeting);

// const result = { 
//     success: ["max- length", "no-amd", "prefer-arrow-functions"],
//     failure: [ "no-var", "var-on-top", "linebreak"],
//     skipped: [ "id-blacklist", "no-dup-keys"]
// };
// function makeList(arr){
//     const resultDisplayArray = [];
//     for (let i = 0;i< arr.length;i++){
//         resultDisplayArray.push(`<li class = "text-warning"> ${arr[i]}</li>`)
//     }
//     return resultDisplayArray;
// }

// /**
//  * makeList (result.failure) should return:
//  * [`<li class="text-warning">no-var</li>`,
//  *  `<li class="text-warning">var-on-top</li>`,
//  *  `<li class= "text-warning"<linebreak</li>`
//  * 
//  * ]
//  **/
// const resultDisplayArray = makeList(result.failure)
// console.log(resultDisplayArray)

//Write Concise Object Literal Declarations Using Simple Fields

// const createPerson = (name, age, gender) =>({name,age,gender});
// console.log(createPerson("Zodiac Hasbro", 56,"male"));

//Write Concise Declarative Functions

// const bicycle = {
//     gear : 2,
//     'setGear'(newGear){
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear)

//Use class Syntax to Define a Constructor funtion

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');

// class SpaceShuttlfe{

//     constructor(mama){
//         this.targetPlanet = 'mercury',
//         this.mama =mama 
//     }
// }
// var rewe = new SpaceShuttlfe('kenya')
// console.log(rewe.targetPlanet)

// function makeClass(){
//     class Vegetable{
//     constructor(name){
//         this.name = name
//     }}
//     return 'Vegetable';
// }
// const Vegetable = makeClass()
// const carrot = new Vegetable('carrot')
// console.log(Vegetable);    

//Use getters and setters to Control Access to an Object

// class Book {
//     constructor(author){
//         this._author = author;
//     }
//     get writer(){
//         return this._author;
//     }
//     set writer(updatedAuthor){
//         this._author = updatedAuthor;
//     }
// }

// const michael = new Book('angel');
// console.log(michael.writer='jane');
// console.log(michael.writer)

// function makeClass(){

//     class Thermostat{
//         constructor(temp){
//             this._temp = temp;
//         }
//         get temperature(){
//             return Math.floor((this._temp-32)*5/9);
//         }
//         set temperature(newtemp){
//             this._temp = newtemp*9/5+32;
//         }

//     }

//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// console.log(temp)
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp)



