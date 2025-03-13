function nonDecreasingSubset(arr){
    let newArr = [];
    let max = arr[0];
    newArr = arr.filter(n => {if(n >= max){max = n;} return n >= max;})
    console.log(newArr.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]) 
//1 3 8 10 12 24
nonDecreasingSubset([ 1, 2, 3, 4]) 
//1 2 3 4
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]) 
//20 