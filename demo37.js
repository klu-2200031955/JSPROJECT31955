//Armstrong Number
let n = parseInt(prompt("Enter Input",0))
let sum = 0,digit = 0,temp = n,N=n
while(N!=0)
{
    N=parseInt(N/10)
    digit++
}
while(n!=0){
    let r = parseInt(n%10)
    sum = sum + Math.pow(r,digit)
    n = parseInt(n/10) 
}
if(temp == sum){
    document.writeln(`${temp} is a armstrong number</br>`)
}else{
    document.writeln(`${temp} is not a armstrong number</br>`)
}
