// ASSIGNMET  NO 03 (CHAPTER 05,04)
// /
// /
// /
// /




// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let a= +prompt("Enter first number");
// let b= +prompt("Enter second number");
// let c= (a+b);
// document.write("Sum of " + a + " and " + b +" is " + c);




// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// let d=(a-b);
// let e=(a*b);
// let f=(a/b);
// let g=(a%b);
// document.write("<br>" + "Subtraction of " + a + " and " + b +" is " + d);
// document.write("<br>" + "Multipication of " + a + " and " + b +" is " + e);
// document.write("<br>" + "Division of " + a + " and " + b +" is " + f);
// document.write("<br>" + "Modulas of " + a + " and " + b +" is " + g);




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 
// l. Output : “The remainder is : 0”.

// let variable ;
// document.write( " \" Value after variable declaration is:  " + variable + "\""+ "<br>");

// variable=5;
// document.write("\"Initial value: " + variable + "\"  " +"<br>")
// variable++;

// document.write("\"Value after incrementing is: " + variable + "\"" + "<br>");

// let b=7;
// let c=variable+b;
// document.write("\"Value after addition is: " + c +"\""+ "<br>" );

// c--;
// document.write("\"Value after decrementing is: " + c + "\"" + "<br>");

// let d=3;
// let reminder=c/d;
// document.write("The reminder is: " + c%d );






// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


// let cost=600;
// let tickets_5 = cost*5;
// document.write("Cost of 5 ticket is : " + tickets_5);




// 5. Write a script to display multiplication table of any
// number in your browser. E.g


// document.write("Table of 4" + "<br>");
// let number=4;
// let a1=number*1;
// let a2=number*2;
// let a3=number*3;
// let a4=number*4;
// let a5=number*5;
// let a6=number*6;
// let a7=number*7;
// let a8=number*8;
// let a9=number*9;
// let a10=number*10;

// document.write("4x1=" + a1 +"<br>");
// document.write("4x2=" + a2 +"<br>");
// document.write("4x3=" + a3 +"<br>");
// document.write("4x4=" + a4 +"<br>");
// document.write("4x5=" + a5 +"<br>");
// document.write("4x6=" + a6 +"<br>");
// document.write("4x7=" + a7 +"<br>");
// document.write("4x8=" + a8 +"<br>");
// document.write("4x9=" + a9 +"<br>");
// document.write("4x10=" + a10 +"<br>");




// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// let celcius=25;
// let convert_farhenhite= celcius*9/5 +32;
// document.write("\"" + celcius + "\u00B0C is " + convert_farhenhite + "\u00B0F" + "\"" );

// let farhenhite=70;
// let conver_celcius= (farhenhite-32)*5/9;
// document.write( "<br>" + farhenhite + "\u00B0F is " + conver_celcius + "\u00B0C")


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges


// let item_1 = 650;
// let item_2 = 100;
// let quantity_item_1 = 3;
// let quantity_item_2 = 7;

// let total_cost = item_1*quantity_item_1+item_2*quantity_item_2;

//  document.write("Price of item 1 is " + item_1 + "<br>");
//  document.write("Quantity of item 1 is " + quantity_item_1 + "<br>");
//  document.write("Price of item 2 is " + item_2 + "<br>");
//  document.write("Quantity of item 2 is " + quantity_item_2 + "<br>" + "<br>");
//  document.write("Total cost of itmes is " + total_cost);





// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// let total_marks = 980;
// let obtained_marks = 804;
// let percentage = obtained_marks*100/total_marks;

// document.write("Total marks: " + total_marks + "<br>");
// document.write("Obtained marks: " + obtained_marks + "<br>");
// document.write("Percentage: " + percentage + "%");




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)



// let currency = (10*104.80)+(25*28);
// document.write("Total currency in PKR is: " + currency)



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression



// let variable = ((100+5)*10)/2;

// document.write("After all calculation: " + variable)



// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// let current_year = 2024;
// let birth_year = 2001;
// let age = current_year-birth_year;

// document.write("Current Year: " + current_year + "<br>");
// document.write("Birth Year: " + birth_year + "<br>");
// document.write( "Your Age: " + age)



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 20;
// let circumference = 2*3.14*radius;
// let area = 3.14*(radius*radius);

// document.write("Radius of circle: " + radius + "<br>");
// document.write("Circumference of circle: " + circumference + "<br>");
// document.write("Area of circle is: " + area )





// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// let snack = "slanty";
// let current_age = 23;
// let maximum_age = 60;
// let estimated = 2;
// let total = (maximum_age*365)*2;

// document.write ("I will need " + total + " " + snack +  " to last, until the rip old age of " + maximum_age )




// let num=5;
// let numvar=--num;
// let numvar2=--numvar;
// let numvar3=--numvar2;


// document.write(numvar , "<br>");
// document.write(numvar2 , "<br>");
// document.write(numvar3);








// * * ** *****************************************
// ASSIGNMENT CHAPTER 04
// *****************************************************

1. Declare 3 variables in one statement.

// let variable1 , variable2 , variable3

// 2. Declare 5 legal & 5 illegal variable names.

// legal varaiable 
// norway
// norway1
// $norway
// _norway
// norwayNorway

// illegal variable
// 1norway
// -norway
// \norway
// @norway
// Norway-


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________



// let a= ("A heading stating “Rules for naming JS variables”");
// let b= ("Variable names can only contain numbers, $ and .For example $my_1stVariable");
// let c= ("Variables must begin with a letter $ or _ . For example $name, _name or name");
// let d= ("Variable names are case sensitive");
// let e= ("Variable names should not be JS keywords");
// document.write(a + "<br>" + b + "<br>" + c +  "<br>" + d  + "<br>" + e );




// let x= prompt("Enter your city");
// if (x=="karachi"){
//     alert("welcome to city of lights")
// }


// else if(x==="lahore"){
//     alert("good! but karachi is karachi")
// }
// else{
//     alert("ok")
// }









