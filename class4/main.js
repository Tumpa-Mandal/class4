
//Main Tasks 01:

function greet(name){
    setTimeout(()=>{
        console.log(`Hello World ${name}`);
    },10000);
}

greet("Zonayed Ahmed"); // Output after 10 seconds: Hello World, Zonayed Ahmed

//Main Tasks 02:

function printNumbers() {
    let number = 1;
    let intervalId = setInterval(function() {
      console.log(number);
      if (number === 10) {
        clearInterval(intervalId);
      }
      number++;
    }, 1000);
  }
  
  printNumbers();

  //Main Tasks 03:

  function handleError() {
    try {
      
      throw new Error("Simulated error occurred.");
    } 
    catch (error) {
      console.log("I have handled the error successfully.");
    }
  }
  
  handleError(); // Output:I have handled the error successfully.
  
//Main Tasks 03:

const success = true;

const pomise = new Promise((resolve,reject)=>{

    if(success){
        resolve("I am resolved");
    }else{
        reject("I am rejected");
    }
});

pomise

.then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  }); //Output:I am resolved