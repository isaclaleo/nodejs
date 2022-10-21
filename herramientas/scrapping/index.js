const puppeteer = require('puppeteer');

(async () => {
    console.log('navegador');
    const browser = await puppeteer.launch({ headless: false});

    const page = await browser.newPage();
    await page.goto('https://github.com/');
    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(title1);

    console.log('cerramos');
    // browser.close();
    console.log('Navegador cerrado');
})();