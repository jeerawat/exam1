# Question 1


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
  - Answer link https://codequiz.azurewebsites.net/data
