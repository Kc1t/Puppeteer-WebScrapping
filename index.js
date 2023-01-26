const puppeteer = require('puppeteer');

const MOVIE_ID = 'tt1877830'

const IMDB_URL = `https://www.imdb.com/title/${MOVIE_ID}/?ref_=fn_al_tt_1`;


(async () =>{
    
    const browser = await puppeteer.launch(); //inicia o navegador
    const page = await browser.newPage() //abre nova pag

    await page.goto(IMDB_URL, {waitUntil: 'networkidle2'})

    await page.screenshot({path: './print.jpeg', fullPage: true}) //pega uma print

    await browser.close()

})()


// Tira Print da Página

// (async ()=>{
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.youtube.com/watch?v=ZrkmqjmKEPg')
//     await page.screenshot({path: 'batman.jpeg'})
//     await browser.close()
// })()


//executar = node index.js