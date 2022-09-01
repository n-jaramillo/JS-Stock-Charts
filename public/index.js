async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    // api key: 4e62783a6f9b4b36ac43ae0f73d02656

    let result = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=4e62783a6f9b4b36ac43ae0f73d02656')

    // GME stock symbol request
    // https://api.twelvedata.com/symbol_search?symbol=GME

    // MSFT stock symbol request
    // https://api.twelvedata.com/symbol_search?symbol=MSFT

    // DIS stock symbol request
    // https://api.twelvedata.com/symbol_search?symbol=DIS

    // BNTX stock symbol request
    // https://api.twelvedata.com/symbol_search?symbol=BNTX

}

main()