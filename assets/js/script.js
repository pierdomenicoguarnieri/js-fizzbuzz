const main = document.querySelector("main");

for(let i = 1; i <= 100; i++){
  const span = document.createElement("h1");

  if(!(i % 3) && !(i % 5)){
    span.innerHTML = "FizzBuzz" + " " + i;
    main.append(span);
  }else if(!(i % 3)){
    span.innerHTML = "Fizz" + " " + i;
    main.append(span);
  }else if(!(i % 5)){
    span.innerHTML = "Buzz" + " " + i;
    main.append(span);
  }else{
    span.innerHTML = i;
    main.append(span);
  }
}