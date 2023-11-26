const greetMsg=()=> `Welcome to JavaScript World \t`;//note the use of \t in template string.

 (function(name) { 
    process.stdout.write(greetMsg()); // note This will not insert a new line like //console.log()
    process.stdout.write(name+"\n"); 
  })('Shyam');   // simple fn definition along with a call to the same function. 

  const prompt = require('prompt-sync')();
  const num=prompt("enter a number \t");
  process.stdout.write("\n\n");
  const pow=prompt("enter the power value \t");
//Notice the extra () after require().  
//The prompt-sync module is a function that creates prompting functions, so you need to //call prompt-sync in order to get your  actual prompting fn.
//Notice you could use \n \t kind of characters to format the
//output as in printf of C language. 
 const power=(x,y)=>{return (Number(x)**y);}
console.log(power(num,4));