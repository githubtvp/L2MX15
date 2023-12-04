function retSum(arr)
{
    const sum = arr.reduce((acc, val) => {return (acc+=val);}, 0)
    console.log("\nSum : " + sum);
    return sum;
}