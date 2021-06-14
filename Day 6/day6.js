/* Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True
*/

function is_array(arr){
    return(Array.isArray(arr));
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

/* Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function array_Clone(arr){
    return true
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/* Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]

*/

function first(arr,n){
    if(n==null)
        return(arr[0]);
    else
    {
        return(arr.slice(0,n))
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

/* Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"]; */

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.toString(""));
console.log(myColor.toString("+"));

/*  Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let ele;
let max = 1;
let count = 0;

for(let i = 0; i<arr1.length; i++){
    count = 0;
    for(let j=0; j<arr1.length; j++){
        if(arr1[i]==arr1[j]){
            count++;
        }
    }
    if(max<count){
        max = count;
        ele = arr1[i];
    }
}

console.log(ele,'(',max,'times)')