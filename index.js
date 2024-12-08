// and operator
// true && true   // true
// false && true // false
// true && false // false
// false && false // false


// or operator           if any expression is false it will be false
// true || true // true
// false || true // true
// true || false // true
//false || false // false

console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false)  // false

console.log(10 ==10 || 11!=11) // true  [left side value true consider left side]
console.log(10>10 || 9!='9') //  false
console.log(10 > 10 || 9!=='9') // true

var a =10;
console.log(a !=11 || ++a) // true
console.log(a) // 10

var a=10
console.log(a< 9 || ++a) // 11
console.log(a) //11

//            true    false    false
console.log((a>10 && 10==a) || a<11)  // false
console.log((a == 11 && a>10) || ++a>11) // true
console.log(a) // 11

// ! not operator
console.log(!true)
console.log(!false)

var a=10
var b=20
console.log((a>b) || (b == a+10 && b==a)) // false
console.log(!(a>b)) // true


// Ternary operator
// used to check condition,shorthand property og if and else 
var age=16;
(age > 18) ? console.log("Eligible for voting"): console.log("Not Eligible")
var age= 18;
(age >=18) ? console.log("Eligible for voting"):console.log("Not Eligible")

var res = (age >=18) ? "Eligible": "!";
console.log(res) // eligible
var res = (age>=18)? "Eligible":"!"
console.log(res) // eligible

var res =(age >=18) ? "Eligible":"!"
console.log(res)  // eligible 

a=10
b=11
res=(a>b)? "a is big": "b is big"
console.log(res)

res = (b>a)? "B is Big" : "A is Big"
console.log(res)

/*a=10
b=10
(a == b) ? "Both are Equal":(a>b)? "A is Big":"B is Big"
*/
var a=10
var b=10
 res=(a>b)? "A is big" : (a<b)? "b is big":"both are equal"
 console.log(res)

 // Find the largest number between a,b,c
 // examples
 /* a=10, b=20, c=30;
 (a>b && a>c) "A is big": (b>c)? "B is big": "C is big"
*/
// res = (a>b && a>c) ? "A is big":(b>c) "Bis big": "c is big";
// console.log(res)
var a=10, b=20, c=30;
var res = (a>b && a>c)? "a is greater": (b>a && b>c)? "b is greater":(c>a && c>a)? "c is greater": "equal";
console.log(res);

/*Explanation of some examples
a=30, b=20, c=40;
(a>b||a>c) ? "A is big" : (b>c)? "B is big": "c is big": "C is big"

a=30, b=50, c=40;
(a>b&&a>c) ? "A is big" : (b>c)? "B is big": "c is big": "C is big"


a=10, b=20, c=40;
(a>b&&a>c) ? "A is big" : (b>c)? "B is big": "c is big": "C is big" */

// var res=(a>b && a>c)? "a is greater":(b>a && b>c)? "b is greater":(c>a && c>b)? "c is greater": "equal"


res= (a>b && a>b)? "a is big":(b>a && b>c)? "b is big": "c is big";
console.log(res);

a =10, b=20;
console.log(`Before Swaping:a = ${a},b=${b}`);
c=a; // 10
a=b; // 20
b=c; // 10
console.log(`After Swaping: a=${a}, b=${b}`)

// swap both numbers without using extra varaible


console.log(true && false) // false
console.log(false || true); // true

const result = !true;
console.log(result);

console.log(10 > 5 && 3 < 4);


const x = false;
const y = true;
console.log(x && y || !x);


console.log(!!(5 > 3)); // true


//           false    false  true
const word = false || 0 || "hello"; // hello
console.log(word);

console.log(null && "JavaScript");

console.log(true || false && false); // true

//             true       false    false but !not so  true
console.log(!("hello" && 0)); // true
//          true-10      0- false 0&&5 - 0
console.log(10 || 0 && 5);  // 10
//            true     true    
const word2= "abc" && "def" || "";   // def  
console.log(word2);  

console.log(3 > 2 && 2 > 4);

//           false    false    false
console.log(false || NaN || undefined);  // undefined

/* 
console.log(false || NaN || undefined); // undefined (all are falsy, returns the last one)
console.log(false || "hello" || NaN);   // "hello" (first truthy value)
console.log(0 || false || 42);          // 42 (first truthy value)
console.log("" || null || undefined);   // undefined (all falsy, returns the last one)

const result1 = "hello" && "world" || "";  // "world"
const result2 = false && "world" || "fallback";  // "fallback"
const result3 = "truthy" && 0 || "last option";  // "last option"
console.log(result1, result2, result3); // world fallback last option
*/
/*1. Eligibility Check
Write a condition to check if a student is eligible for a scholarship. The criteria are:
- The student’s grade is A or B.
- The student’s attendance is above 75%.
Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.*/

var grade = "A";
var grade = "B"; 
var attendance = 80; 
var eligibility = (grade === 'A' || grade === 'B') && attendance > 75 ? "Eligible" : "Not Eligible";
console.log(eligibility);
// or
//((grade==="A"||grade==="B")&& attendance>75) ?://
/*2. Age Group Classification
Classify a person based on their age:
- If the age is less than 13, they are a “Child”.
- If the age is between 13 and 19 (inclusive), they are a “Teenager”.
- Otherwise, they are an “Adult”.
Use nested ternary operators to determine the classification.*/

var age = 15; 
var res = (age < 13) ? "Child" : (age >= 13 && age <= 19) ? "Teenager" : "Adult";
console.log(res);
/*3. Login Status
Check the login status of a user. A user is considered logged in if:
- isLoggedIn is true.
- Their session is active (sessionActive is true).
Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.*/
var isLoggedIn = true; 
var sessionActive = true; 
var message = (isLoggedIn && sessionActive) ? "Welcome Back" : "Please Log In";
console.log(message);

/*4. Grade Evaluation
Assign a letter grade based on a student’s score:
- Scores 90 and above: "A".
- Scores between 80 and 89: "B".
- Scores between 70 and 79: "C".
- Scores below 70: "Fail".
Use nested ternary operators to determine the grade.*/
var score = 85; 
var grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "Fail";
console.log(grade);


/*5. Product Discount Validation
Determine the discount for a product based on the following criteria:
- If the product price is greater than $100, the discount is 20%.
- Otherwise, the discount is 10%.
Use a ternary operator to set the discount percentage*/
var price = 120;
var discount = (price > 100) ? 20 : 10;
console.log(`The discount is ${discount}%`);






// conditional statements 

// 1.simple if

var srinivasHasLaptop = true;
if (srinivasHasLaptop) {
    console.log("srinivas can attend zoom meeting")
}

var srinivasHasLaptop = true;
if (srinivasHasLaptop) {
    console.log("srinivas can attend zoom meeting")
}
console.log("srinivas cannot attend meeting")

var srinivasHasLaptop = true;
if (srinivasHasLaptop) {
    console.log("srinivas can attend zoom meeting")
}
if (!srinivasHasLaptop) {
    console.log("srinivas cannot attend meeting")
}

var srinivasHasLaptop = false;
if (srinivasHasLaptop) {
    console.log("srinivas can attend zoom meeting")
}
if (!srinivasHasLaptop) {
    console.log("srinivas cannot attend meeting")
}

/*Write a condition to check if a student is eligible for a scholarship. The criteria are:
- The student’s grade is A or B.
- The student’s attendance is above 75%.
Use a condition operator to assign "Eligible" or "Not Eligible" to a variable.*/

var grade="A"
var percentage = 76;
if((grade==="A" || grade==="B") && percentage>75) {
    console.log("Eligible")
}
/* 2. else */
var grade="C"
var percentage = 76;
if((grade ==="A" || grade ==="B") && percentage>75) {
    console.log("Eligible")
} 
else {
    console.log("Not Eligible")
}

var grade="C"
var percentage = 72;
if((grade ==="A" || grade ==="B") && percentage>75) {
    console.log("Eligible")
} 
else {
    console.log("Not Eligible")
}

var grade="C"
var percentage = 78;
if((grade ==="A" || grade ==="B") && percentage>75) {
    console.log("Eligible")
} 
else {
    console.log("Not Eligible")
}

var a=10; b=30;
if (a>b){
    console.log("A   is big")
}
else {
    console.log("B is big")
}

var a=10; b=8;
if (a>b){
    console.log("A is big")
}
else {
    console.log("B is big")
}

var gender = "Male";
var age = 24
if (gender === "Male" && age >=21) {
    console.log("Eligible for Marriage")
}
else {
    console.log("!")
}

var gender = "Male";
var age = 20
if (gender === "Male" && age >=21) {
    console.log("Eligible for Marriage")
}
else {
    console.log("!")
}

// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested condition operators to determine the classification.

var age=13;
if (age<13) {
    console.log("Child")
}
if (age>=13 && age<=19) {
    console.log("Teenager")
}
if (age>19) {
    console.log("Adult")
}
// here we are comparing three times so we use lateral if below

var age = 12;
if (age<13) {
    console.log("Child")
}
else if (age>=13 && age<=19) {
    console.log("Teenager")
}
else if (age>19) {
    console.log("Adult")
}

var age = 23;
if (age<13) {
    console.log("Child")
}
else if (age>=13 && age<=19) {
    console.log("Teenager")
}
else if (age>19) {
    console.log("Adult")
}

/*4. Grade Evaluation
Assign a letter grade based on a student’s score:
- Scores 90 and above: "A".
- Scores between 80 and 89: "B".
- Scores between 70 and 79: "C".
- Scores below 70: "Fail".
Use nested condition operators to determine the grade.*/
/*  3. Lateral if */
var score =85;
if (score >=90 && score <=100) {
    console.log ("A")
}
else if (score >=80 && score<=89) {
    console.log ("B")
}
else if (score >=70 && score <=79) {
    console.log("C")
}
else if (score>=0 && score<=70) {
    console.log("Fail")
}
else {
    console.log("Invalid Marks")
}

var score =120;
if (score >=90 && score <=100) {
    console.log ("A")
}
else if (score >=80 && score<=89) {
    console.log ("B")
}
else if (score >=70 && score <=79) {
    console.log("C")
}
else if (score>=0 && score<=70) {
    console.log("Fail")
}
else {
    console.log("Invalid Marks")
}

var score =50;
if (score >=90 && score <=100) {
    console.log ("A")
}
else if (score >=80 && score<=89) {
    console.log ("B")
}
else if (score >=70 && score <=79) {
    console.log("C")
}
else if (score>=0 && score<=70) {
    console.log("Fail")
}
else {
    console.log("Invalid Marks")
}

/*5. Product Discount Validation
Determine the discount for a product based on the following criteria:
- If the product price is greater than $100, the discount is 20%.
- Otherwise, the discount is 10%.
Use a condition operator to set the discount percentage.*/
var productPrice = 120
if (productPrice > 100) {
    console.log("discount 20%")
}
else {
    console.log("discount is 10%")
}
/* TASKS */
/*1. Scenario: Online Library Membership
---------------------------------------
Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

Basic Membership: Access to only free books.

Standard Membership: Access to free books and discounted paid books.

Premium Membership: Access to all books, including exclusive content.

Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.*/

var membership= "StandardMembership";
if (membership === "Basic membership") {
    console.log("Access to only free books.")
} 
else if (membership === "StandardMembership") {
    console.log("Access to free books and discounted paid books.")
}
else if (membership === "PremiumMembership") {
    console.log("Access to all books, including exclusive content.")
}
else {
    console.log("Invalid")
}

var membership= "VIPCustomers";
if (membership === "RegularCustomers" && 0) {
    console.log()
}
else if(membership === "VIPCustomers") {
    console.log()
}


/*2. Scenario: E-Commerce Discount Application
---------------------------------------------
Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.*/
/* it is normal way */
var membership = "VIPCustomers"; 
if (membership === "RegularCustomers") {
  console.log("You are a Regular Customer. Discounts vary based on purchase amounts.");
} else if (membership === "VIPCustomers") {
  console.log("You are a VIP Customer. Enjoy enhanced discounts on your purchases!");
} else {
  console.log("Invalid membership type. Please check your membership.");
}


var membershipStatus = "VIP"; 
var purchaseAmount = 600; 
if (purchaseAmount < 0) {
  console.log("Invalid purchase amount.");
} else if (membershipStatus === "Regular") {
  if (purchaseAmount < 100) {
    console.log(`Final price: $${purchaseAmount.toFixed(2)}`);
  } else if (purchaseAmount <= 500) {
    console.log(`Final price: $${(purchaseAmount * 0.95).toFixed(2)} (5% discount)`);
  } else {
    console.log(`Final price: $${(purchaseAmount * 0.90).toFixed(2)} (10% discount)`);
  }
} else if (membershipStatus === "VIP") {
  if (purchaseAmount < 100) {
    console.log(`Final price: $${(purchaseAmount * 0.90).toFixed(2)} (10% discount)`);
  } else if (purchaseAmount <= 500) {
    console.log(`Final price: $${(purchaseAmount * 0.85).toFixed(2)} (15% discount)`);
  } else {
    console.log(`Final price: $${(purchaseAmount * 0.80).toFixed(2)} (20% discount)`);
  }
} else {
  console.log("Invalid membership status.");
}



/*3. Scenario: Academic Scholarship Eligibility
----------------------------------------------
Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.*/
 
var studentGPA = 3.6; 
var extracurricularActivities = 3; 
var communityServiceHours = 120; 
if (studentGPA >= 3.5) {
  console.log("Eligible for Merit-Based Scholarship.");
}
if (studentGPA >= 3.0 && extracurricularActivities >= 2) {
  console.log("Eligible for Leadership Scholarship.");
}
if (studentGPA >= 2.5 && communityServiceHours >= 100) {
  console.log("Eligible for Community Service Scholarship.");
}
if (studentGPA < 2.5 && extracurricularActivities < 2 && communityServiceHours < 100) {
  console.log("Not eligible for any scholarships.");
}


var dayOfWeek = "Saturday"; 
var age = 10; 
if (age < 0 || age > 120) {
  console.log("Invalid age. Please enter a valid age.");
} else if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || 
           dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
  if (age < 12 || age >= 65) {
    console.log("Ticket price: $6.00 (50% discount)");
  } else {
    console.log("Ticket price: $12.00");
  }
} else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  if (age < 12 || age >= 65) {
    console.log("Ticket price: $10.50 (30% discount)");
  } else {
    console.log("Ticket price: $15.00");
  }
} else {
  console.log("Invalid day of the week. Please enter a valid day.");
}



/*5. Scenario: Event Registration Validation
Context: An event registration system needs to validate user inputs before confirming their registration:

The user must be 18 years or older to register.

The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

The user must provide a valid email address.

Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.*/
var age = 20; 
var participantsRegistered = 99; 
var email = "example@gmail.com"; 
if (age < 18) {
  console.log("Registration failed: You must be 18 years or older to register.");
} else if (participantsRegistered >= 100) {
  console.log("Registration failed: The event is full. No more registrations are accepted.");
} else if (!email.includes("@") || !email.includes(".")) {
  console.log("Registration failed: Please provide a valid email address.");
} else {
  console.log("Registration successful! Welcome to the event.");
}
