const puppeteer = require('puppeteer');

// const MOVIE_ID = '/tt5807606'

// const IMDB_URL = `https://www.imdb.com/title/${MOVIE_ID}/?ref_=fn_al_tt_1`;
const IMDB_URL = `https://www.imdb.com/title/tt5807606/?ref_=fn_al_tt_1`;


(async () =>{
    
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 0                                                       //tempo em para abrir 1s = 1000
    });                                                                 //inicia o navegador
    const page = await browser.newPage()                                //abre nova pag

    await page.goto(IMDB_URL, {waitUntil: 'networkidle2'})

    await page.screenshot ( {path: './print.jpeg', /*fullPage: yes*/} ) //pega uma print
 
    
    // pegando elemento da pag
    let data = await page.evaluate(()=>{

        let titulo = document.querySelector('.sc-b73cd867-0.cEmnhL').innerHTML; //pega a classe selecionada e retorna o conteudo dela
        let nota = document.querySelector('.sc-7ab21ed2-1.eUYAaq').innerHTML;
        let ano = document.querySelector('.sc-8c396aa2-2.jwaBvf').innerHTML;


        return{
            titulo,
            nota,
            ano
        }

    })

    console.log(data)


    await browser.close()             //fecha o browser
    
})()






// Tira Print da Página e abre pag

// (async ()=>{
//     const browser = await puppeteer.launch({ //abre o navegador
//         headless: false,
//         slowMo: 1000 //tempo de espera para abrir
// })
//     const page = await browser.newPage()
//     await page.goto('https://www.youtube.com/watch?v=ZrkmqjmKEPg')
//     await page.screenshot({path: 'batman.jpeg'})
//     await browser.close()
// })()


//executar = node index.js