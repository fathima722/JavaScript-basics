//Console log todays day and time in a specific format
var today = function() {
	var date = new Date();
	var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var hour = date.getHours();
  var partOfDay = hour > 12 ? "PM" : "AM";
  var minute = date.getMinutes();
  var sec = date.getSeconds();
  
	console.log("Today is: "+ dayArray[date.getDay()]);
  console.log(`Current time is: ${hour} ${partOfDay} : ${minute} : ${sec}`);
}
today();

/* ------------------------------------------------------------ */
//Print contents of current window
/* var printWindow = () => window.print();
printWindow();  */

/* ------------------------------------------------------------ */
// function to get current date in different formats
var getDate = (today) => {
	console.log("date is: "+today.toLocaleDateString('ar-EG', { year:"numeric", month:"short", day:"numeric"}) );
  console.log("date is: "+today.toLocaleDateString('en-US', { year:"numeric", month:"short", day:"numeric"}) );
  var month = today.getMonth()+1; // as month starts at 0 we add 1
  if (month < 10) {
  	month = "0"+month;
  }
  var date = (today.getDate() < 10) ? "0"+today.getDate() : "";
  console.log(`${today.getFullYear()}/${month}/${date}`);
  console.log(`In YY-MM-DD format: ${today.getFullYear().toString().substr(2)}-${month}-${date}`);
}
getDate(new Date());

/* ------------------------------------------------------ */
//Area of a triangle
var triangleArea = (a,b,c) => {
	let s = (a + b + c) / 2;
	let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
	return area;
}
console.log(triangleArea(5,6,7));

/* ----------------------------------------------------- */
// string reverse
var str= "w3resource";
var myArr = str.split("");
var myArr2 = [];
console.log(myArr);
for(let i =myArr.length;i>0;i--){
	let poppedValue =	myArr.pop(i);
  console.log(poppedValue);
  myArr2.push(poppedValue);
}
console.log(myArr2.join(""));

/* ----------------------------------------------------- */
//Leap Year
function leapYear(year) {
	if(year % 4 === 0) {
  	if(year % 100 !== 0){
    	return "Leap Year";
    }
    else if(year % 400 === 0){
    	return "Leap Year";
    }
  }
  return "Not a Leap Year";
}
console.log(leapYear(100));

/* ----------------------------------------------------- */
//Find out if 1st January of a year is sunday
function sunday(){
	for (var year = 2014; year <= 2050; year++) {
		var date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`1st January is being a Sunday  ${year}`);
    }
  }
}
sunday();

/* ----------------------------------------------------- */
//Compare user input with a random number
function random() {
	var num = Math.ceil(Math.random() * 10);
  console.log(num);
  let number = prompt("Please enter a number");
  return (number == num) ? console.log("Num matched!") : console.log("Num not matched!")
}

random();

/* ----------------------------------------------------- */
function multiply(){
	const firstNum = document.getElementById("fnum").value;
	const lastNum = document.getElementById("lnum").value;
  console.log(firstNum, lastNum)
  result = firstNum * lastNum;
  console.log(result);
  document.getElementById("pname").innerHTML = result;
}

/* ----------------------------------------------------- */
function divide(){
	const firstNum = document.getElementById("fnum").value;
	const lastNum = document.getElementById("lnum").value;
  result = firstNum / lastNum;
  document.getElementById("pname").innerHTML = result;
}

/* ----------------------------------------------------- */
//Convert farenheit to celcius
function tempInCel() {
	const f=document.getElementById("tempF").value;
	const c = (f-32)*5/9;
  document.getElementById("tempFC").innerHTML = c;
  document.getElementById("tempF").value = "";
}

/* ----------------------------------------------------- */
convert celcius to farenheit
function tempInFar() {
	const c= document.getElementById("tempC").value;
	const f = (c*9/5)+32;
  document.getElementById("tempCF").innerHTML = f;
  document.getElementById("tempC").value = ""
}

/* ----------------------------------------------------- */
//IIFE
(function() {
	//console.log(window.location.href);
  console.log(`${document.URL}`);
})();

/* ----------------------------------------------------- */
//change a variable name
function varName() {
	var name = prompt("What would you like the variable name to be?");
  let myName = "I am something";
  this[myName] = name;
  console.log(`${this[myName]} is now holding the value ${myName}`);
}
varName();

/* ----------------------------------------------------- */
//IIFE to extract the file extension
(function(){
	const filename = "abcd.txt";
  var f = filename.split(".").pop();
  console.log(f);
})()

/* ----------------------------------------------------- */
function difference(givenNum){
	return (givenNum > 13) ? 2*(givenNum - 13) : (13 - givenNum);
}

console.log(difference(68))

/* ----------------------------------------------------- */
function sum(a,b){
	return (a==b) ? 3*(a+b) : a+b;
}
console.log(sum(8,8))

/* ----------------------------------------------------- */
function anotherDiff(givenNum){
	return (givenNum > 19) ? 3*(givenNum - 19) : (19 - givenNum);
}

anotherDiff(56);

/* ----------------------------------------------------- */
function fifty(a,b) {
	return (a == 50 || b == 50) || (a+b == 50) ? true : false;
}
console.log(fifty(25,32));

/* ----------------------------------------------------- */
//Absolute Difference
function absoluteDiff(num) {
	return ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));
}
console.log(absoluteDiff(380))

/* ----------------------------------------------------- */
function strings(str){
	const a = str.split("");
  return (a[0] == "P" && a[1]=='y') ? str : "Py"+str;
  //return str.substring(0,2) === "Py" ? str : "Py"+str;
}
console.log(strings("thon"))

/* ----------------------------------------------------- */
function removedChar(str, i){
	var a = str.split("");
  return a[i];
}
console.log(removeChar("abcde",3));

/* ----------------------------------------------------- */
function removeChar(str,index) {
	const str1 = str.substring(0, index);
  const str2 = str.substring(index+1, str.length);
  
  return str1+str2;
}
console.log(removeChar("abcde",2));
