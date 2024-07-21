 //1 
 function  reverseArray()
 {
  var word = ['a','b','c','d','e']
  console.log(word.length)

   for(i=(word.length)-1 ; i>=0; --i)
   {
    console.log ("Reverse Array for smaller one  is: "  +word[i])
   }
 }
 reverseArray()

 // pt 2

 function  largeArray()

 {
    var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    console.log(array.length)
    for (i= (array.length)-1 ; i>0 ; --i)
    {
        console.log("Reverse Array for larger one is: " +array[i])
    }
 }
 largeArray()


 // 2 

 function negNumbers()
 {
    var input =  [1,4,7,6,5,-2,-4];
      console.log (input)
      for (i =input ; i<0 ; i++)
      {
        console.log('the array  of eliminating negative number is ' +input[i].splice(2,2))
      }
 }

negNumbers()

// 3-Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
 

function  vowelCheck ()
{
   
  var string = "aeiousdenlyhyahh";
  console.log(string.length)
 if ( string[i]=='a'|| string[i]=='e'||string[i]=='i'|| string[i]=='o' || string[i]=='u')
{
    count++
    console.log("the total number of vowel is: "+count)
}
  }

vowelCheck ()


// 4-Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function palindrome(str)
{
var str = "kayk"
 var length = str.length
 for ( let i=0 ; i<length/2 ;i++)
 {
    if(str[i]!=str[length-i-1])
    return false;
 }
 return true;
}
var str2 = "racecar"
console.log(palindrome(str2))

//5- Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.

let user = parseInt(prompt('write a number which is in between 55 to 99'))

if ( user >=50 && user <99 ){
 console.log('the number is in range')
}
else {
    console.log('the number is not in range')
}

// 6 Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.
// given question is incomplete

//7 Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

let words2 ="tamsalmahmood";
console.log(words2)
let strCopy = words2.slice(words2.length-3,words2.length)
console.log(strCopy)
let strCopy1 = words2.slice(words2.length-3,words2.length)
console.log(strCopy1)
let strCopy2 = words2.slice(words2.length-3,words2.length)
console.log(strCopy2)
let strCopy3 = words2.slice(words2.length-3,words2.length)
console.log(strCopy3)

// Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

var angle = prompt("tell the range of angle")

if(angle>0 && angle<90){
 console.log('The angle is acute')
}
 else if(angle===90){
    console.log('The angle is right')
   }
 else if(angle>90 && angle<180){
    console.log('The angle is obtuse')
   }
   else {
    console.log("the angle is straight angle")
   }
//    Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

// 10. Write a JavaScript program to find the index of an array item in a for loop.
 let array2 = [];
 let length2= prompt("enter the size of an array")
 alert('enter the size of an array' +length2)
 for ( i=0 ;i<length2; i++)
 {
    array2[i]=prompt("enter the "+i+"the index input")
 }
    let =prompt("enter index")
    let result = array2.CharAt(index)
    console.log( index+" value of array is "+result)
 