for(let i = 0; i <= 100; i++){
  if(!(i % 3) && !(i % 5) && i){
    console.log("FizzBuzz", i);
  }else if(!(i % 3) && i){
    console.log("Fizz", i)
  }else if(!(i % 5) && i){
    console.log("Buzz", i);
  }else{
    console.log(i);
  }
}