//______________Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

let menu = {
    width:  200,
    height:  300,
    title: 'my menu' 
}

    for(let key in menu){
        if(typeof menu[key] == 'number'){
            menu[key] = menu[key]*2;
        } 
    }
console.log(menu);

//_______________В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 



let arr = [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];

for(let i=0; i<arr.length; i++){
    console.log(arr[i].title);
}

for(let i=0; i<arr.length; i++){
    console.log(arr[i].title, arr[i].price);
}
for(let i=0; i<arr.length; i++){
    let discountedPrice = arr[i].price * (100 - arr[i].discount) / 100;
    console.log(arr[i].title, discountedPrice);
}


//1 
function numbers(a , b){
    if(a%2==0 && b%2==0){
        return a*b;
    } else if(a%2!==0 && b%2!==0){
        return a+b;
    }else {
        return a%2!==0 ? a:b;
    }
    
}

// console.log(numbers(+prompt('enter number 1'),+prompt('enter number 2')));

function secondsToDays(seconds) {
    return seconds/86400;
}

console.log(secondsToDays(90054));

function isPrime(number){
    if(number <=1){
        return false;
    }
    for(let i =2; i<number; i++){
        if(number % i ===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(13));
console.log(isPrime(18));

function num(a,b){
    if(a>b){
        return b;
    }
    else{
        return a;
    }
}

console.log(num(25,30));

function sortNumbers(a,b){
    if(a>b){
        return [b, a];
    }
    else{
        return [a, b];
    }
}

console.log(sortNumbers(-21, -13));
console.log(sortNumbers(1.3331,1.3330));