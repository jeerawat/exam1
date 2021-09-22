const puppeteer = require('puppeteer');
function run () {
    return new Promise(async (resolve, reject) => {
        try {
          
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://codequiz.azurewebsites.net/');

  // Use Promise.all to wait for two actions (navigation and click)
  await Promise.all([
    page.waitForNavigation(), // wait for navigation to happen
    page.click('input'), // click link to cause navigation

  ]);

       
            var getArgs = function() { 
             
            return  process.argv[2];
            };
            await page.exposeFunction("getArgs", getArgs);
  const result = await page.evaluate(async () => {
    
    const nName = await getArgs();
    let nav = "-";
    const tr=  document.documentElement.querySelectorAll("table  tr");
    tr.forEach(trelem => {
       const td=  trelem.querySelectorAll("td");
       td.forEach(tdelem => {
          if  (td[0].innerText === nName.toString()) {
           nav = td[1].innerText ;
          
          }
         
       });
       
       
    });
    
     return {
       nav:nav
     }
});

            browser.close();
            return resolve(result);
        } catch (e) {
            return reject(e);
        }
    })
}

if (process.argv.length == 3) {
  run().then(console.log).catch(console.error);
}else{
  console.log("Please Input nav name")
}

