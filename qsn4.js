console.log("Print sum of Even natural numbers from 1 to n ");
let n = 10;
console.log("n = " + n);
 if(n%2 != 0)
 {
   n--;
 }
 console.log(n); 
 console.log();         
 sum = 0;
 while( n > 1 )      
 {
    sum+=n;
    n-=2;
    console.log(n);   
 }  
 console.log(sum);       
 