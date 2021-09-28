
# Section 1

Please answer all questions.
You could answer and copy your codes for the answers to this document and then send the file back to reviewer.

 
Question 1

Assuming http://codequiz.azurewebsites.net/data returns an object {data: 10}. 
Below function doesn’t work correctly.

function thisIsSyncFunction() {
    let result = 0;
 
    fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) =>    {
        result = response.data;
    });
    return result;
}
 
const number1 = thisIsSyncFunction()

const calculation = number1 * 10;

console.log(calculation);


1.1	Please correct the code, so it really prints out the expected result (100). You can fix it anyway you like but it still has to call fetch as the source of data.

### Answer link https://github.com/jeerawat/exam1/blob/main/section1-a1-1.js











1.2	Is there a way to make thisIsSyncFunction really synchronous, so number1 has the value 10 before it is used for the calculation on the next line.

### Answer link https://github.com/jeerawat/exam1/blob/main/section1-a1-2.js

 

Question 2

From this code https://codepen.io/domrongpon-tanpaibul/pen/ExgVrPJ
, please provide the CSS that move the start to the middle of the box.
 
### Answer link  https://codepen.io/jeerawat/details/ZEyovex


Question 3

From this code, https://codepen.io/domrongpon-tanpaibul/pen/YzGyBZq?editors=1010
, please make the box not close when click close button. You should not modify the DOM elements in this page, but rather achieve this by handling the event.

Note that you can only add code inside Quiz block in JS section but can't modify class MyDlg.
 
### Answer link https://codepen.io/jeerawat/pen/wvejpqo

Question 4

From this code, https://codepen.io/domrongpon-tanpaibul/pen/zYKvboB
, please write code to show RGB code that users clicked inside the answer box. Please consider the efficiency of the code as well.

### Answer link  https://codepen.io/jeerawat/pen/OJgZzqm
 

Question 5

Find the memory leak in this application http://codequiz.azurewebsites.net/memleak
When ever user open a dialog, and close it, a memory will keep increased around 25 MBs per round. Please identify what is causing the memory leak, and how to fix it and describe how you investigate it.

** Please note that the big array in the code was added intentionally, to make it easier to see the leak. 
This array should be cleared by browser GC when the dialog is closed, and element is removed from DOM, but it is not (why is it the case?)
 ## Answer -


 





# Section 2

 

Please commit the codes to your personal git repository and send the links to the git repositories back to the reviewer.



 
Question 1

Please create a web application following below specs.
-	Angular framework is preferred, but you can also use your preferred framework, or pure javascript/HTML5
-	Page consist of 3 columns, first column has fixed width of 200px, last column has fixed width of 300px, the middle column expand/shrink to fill the remaining space of the page, and should be at least 100px. If window is smaller than 600px, show the scrollbar.
-	In the first column, create an input field, where user can enter any number. If the value entered by users are not integer, round it to the nearest integer. If user enter negative values, replace it with 1.
-	In the second column, show a drop down, which user can choose what calculation between “isPrime” and “isFibonacci”  he wants to calculate, default the value to isPrime. 
    o	isPrime: calculate whether the input is a prime number, show true in Col3 if the number is prime, and false in the other case
    o	IsFibanacci: calculate whether the input is a fibonacci number, show true in Col3 if the number is a fibonacci number, and false in the other case.
-	Whenever the value in input box in column1, or the dropdown in column2 changes, execute the calculation accordingly, and show the result in column 3.

 ## Answer -
 

Question 2

Create a web app with an input for using as filter and a table for display the result. The app need to get data from https://api.publicapis.org/categories for using for displaying in the result table.
Result table
    •	By default display all data from categories
Filtering
    •	When user type any text in the input box, the result table should be filter to display only the result that contains the text.
NOTE
    •	The app could created with any framework but Angular is preferred

## Answer -


 
Question 3

Write a node.js code that retrieve NAV (Net Asset Value) of a Fund from this website https://codequiz.azurewebsites.net/

The code should be in a single js file, and can be run using “node yourfile.js FUNDCODE” using node 12. After running “node yourfile.js BEQSSF” we should get BEQSSF nav print out in the console (11.247), similary running “node yourfile.js BM70SSF” should print out 9.9774 .
 
## Answer link https://github.com/jeerawat/exam1/blob/main/yourfile.js

 

