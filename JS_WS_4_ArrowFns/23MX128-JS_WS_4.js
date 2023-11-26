function ln(n) {
    for (i = 0; i < 25; i++) {
        process.stdout.write('-');
    }
    if (arguments.length === 1) {
        process.stdout.write('\nAns ' + n + '.\n');
    }    
}

function pr(msg)
{
    process.stdout.write(msg + '\n');
}

ln(1);
const myMsg = (name, age) => {
    console.log('Hello ' + name);
    console.log('You are ' + age + ' years old');
}
myMsg('vara', 60);
ln(2);
//process.stdout.write() 
const counter = cnt => {
    if (cnt > 100) {
        cnt = 0;
    }
    else {
        cnt++;
    }
    return cnt;
}
console.log('Counter value : counter = 101, result : ' + counter(101));
console.log('Counter value : counter = 7, result : ' + counter(7));
ln(3);
const sum = (x, y) => { return (x + y); }
let x = 4; let y = 5;
console.log(`The sum of '${x}' and '${y}' is ${sum(x, y)}`);
x = 4.2; y = 5.7;
console.log(`The sum of '${x}' and '${y}' is ${sum(x, y)}`);

ln(4)
const sumeven = (... restArgs) => {
    let sum = 0;
    for(i = 0; i <restArgs.length;i++)
    {
        if(restArgs[i] % 2 ===0)
        {
            sum+= restArgs[i];
        }
    }
    return sum;
}
pr("Sum of even numbers in the series of numbers passed is " + sumeven(1,2,3,4,5,6,7,8)) ;

ln(5)
const arrMax = (arr) => {
    let arrM = arr[0];
    if(arr.length === 0)
    {
        pr("Array is empty");
       return;
    }
    else{        
        arr.forEach(element => {
            if(arrM < element )
            {
                arrM = element;
            }
        });
    }
    return arrM;
}
 let arr = [2,3,4,5,6,9,7,8];
 pr('Maximum value in array of numbers is : ' + arrMax(arr));
 pr('Maximum value in array(using Math.max(...arr) ) is : ' + Math.max(...arr));
ln(6)
 const sumEvens = (arr) => {
    let sum = 0;
    for (const i of arr) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  const arr1 = [1, 2, 9, 13, 14, 3, 4, 5, 6, 7, 8];
  pr('Sum of even numbers in array is : ' + sumEvens(arr1) ); 
  ln(7)
  const list = [1, 2, 3];
  const result = (arr) => list.reduce( (acc, item) => acc + (item**2), 0);    
  pr('Sum of squares of elements in the array is : ' + result(list));
ln(8)
let num = 3;
const isEven = (num) => {return num%2 === 0};
pr(`The number '${num}' provided, isEven is ` + isEven(num) );
num = 6;
pr(`The number '${num}' provided, isEven is ` + isEven(num) );
ln(9)
pr('Same as Qsn 5 above)');
ln(10)
let wt = 164.0;
const checkWt = (wt) =>{
    let lbs = wt*2.2;
    if(lbs > 150)
    {
        return 'Obese';
    }
    else{
        return 'you are ok';
    }
}
pr('Weight check : ' + checkWt(wt) );