function printNthElement(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i += Number(arr[arr.length - 1])){
        newArr.push(arr[i]);
    } 
    console.log(newArr.join(' '));   
}

printNthElement(['5', '20', '31', '4', '20', '2']) 
//5 31 20
printNthElement(['dsa', 'asd', 'test', 'test', '2']) 
//dsa test
printNthElement(['1', '2', '3', '4', '5', '6']) 
//1