//default output and array
let out = '0';
let out2= [];

//grabbing the button inputs and adding them to our output
const appendOut = (value) => {
  if (out === '0') {
    //special logic needed to avoid errors from eval starting with %,/,or *
    if (value === '%' || value === '/' || value === '*') {
      out += value;
      document.getElementById('disp1').innerHTML = out;
    } else {
      //removing a naked 0from the start of the output
      out = '';
      out += value;
      document.getElementById('disp1').innerHTML = out;
    }
  } else {
    //concatenating button pressed onto the output
    out += value;

    document.getElementById('disp1').innerHTML = out;
  }
}

//special logic to ensure only a single decimal
const appendOutPoint = (value) => {
  if (!out.includes('.')) {
    out += value;
  }
  document.getElementById('disp1').innerHTML = out;
}

//pushes output into an array to be evaluated on equals
const avg = () => {
  out2.push(eval(out));
  document.getElementById('disp2').innerHTML = out2;
  out = '0';
}

//gets sum of array, divides by length, then prints the array and the avg
const findAvg = (x) => {
  let y = x.reduce((total, amount) => total + amount) / x.length;
  document.getElementById('disp1').innerHTML = y;
  document.getElementById('disp2').innerHTML = out2;
  return y;
}

//gets sum of array, prints sum and array
const findSum= (x) => {
  let y = x.reduce((total, amount) => total + amount);
  document.getElementById('disp1').innerHTML = y;
  document.getElementById('disp2').innerHTML = out2;
}

//random number generator for dice function, inclusive of min and max
const numGen = (low, high) => {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

//takes the random number, allowing inputs for die type
const dice = (a,b) => {
  if (out === '0') {
    //allows default role of 1 die if output has no value entered
    document.getElementById('disp1').innerHTML = numGen(a,b);
    document.getElementById('disp2').innerHTML = eval(out2);
    out = '0';
    out2 = [];
  } else if (eval(out) > 1000) {
    //prevents freezing from massive calculations
    document.getElementById('disp1').innerHTML = "That's too many dice!";
    document.getElementById('disp2').innerHTML = eval(out2);
    out = '0';
    out2 = [];
  } else if (eval(out) >= 1) {
    //for multi-dice rolls, iterates for each die, then prints total and individual rolls
    for (i = eval(out); i > 0; i--){
      out2.push(numGen(a,b));
    }
    findSum(out2);
    out = '0';
    out2 = [];
  } else {
    //prevents rolling 0 die rolls or negative numbers
    document.getElementById('disp1').innerHTML = "Pick an number 1 or higher!"
    document.getElementById('disp2').innerHTML = eval(out2);
    out = '0';
    out2 = [];
  }
}

//calling various die rolls on button
const d20 = () => {
  dice(1,20);
}
const d12 = () => {
  dice(1,12);
}
const d10 = () => {
  dice(1,10);
}
const d8 = () => {
  dice(1,8);
}
const d6 = () => {
  dice(1,6);
}
const d4 = () => {
  dice(1,4);
}

//BIG EQUALS
const equals = () => {
  //if there is an array in output, it's because we're averaging
  if (out2.length > 0) {
    out2.push(eval(out));
    findAvg(out2);
  } else
  //our results
  document.getElementById('disp1').innerHTML = eval(out);
  document.getElementById('disp2').innerHTML = eval(out2);
  out = '0';
  out2 = [];
}

//resets output and out2
const cl = () => {
  out = '0';
  out2 = [];
  document.getElementById('disp1').innerHTML = eval(out);
  document.getElementById('disp2').innerHTML = eval(out2);
}
