const main = document.querySelector(".container");

for(let i = 1; i <= 100; i++){
  const span = document.createElement("div");
  span.classList.add("box")

  if(!(i % 3) && !(i % 5)){
    span.classList.add("fizzbuzz");
    span.innerHTML = "FizzBuzz";
    main.append(span);
  }else if(!(i % 3)){
    span.classList.add("fizz");
    span.innerHTML = "Fizz";
    main.append(span);
  }else if(!(i % 5)){
    span.classList.add("buzz");
    span.innerHTML = "Buzz";
    main.append(span);
  }else{
    span.innerHTML = i;
    main.append(span);
  }
}