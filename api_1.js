const  coinName=document.querySelector('#coinName');
const  currencyName=document.querySelector('#currencyName');
const  prices=document.querySelector('#prices');
const  volumes=document.querySelector('#volumes');
const  changes=document.querySelector('#changes');
axios.get('https://api.cryptonator.com/api/full/btc-usd')
.then(res => {
   
    coinName.innerText=res.data.ticker.base;
    currencyName.innerText=res.data.ticker.target;
    prices.innerText=res.data.ticker.price;
    volumes.innerText=res.data.ticker.volume;
    changes.innerText=res.data.ticker.change;
 
})
.catch(err => {
    console.log("ERROR!", err)
})