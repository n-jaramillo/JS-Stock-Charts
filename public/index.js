async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    // api key: 4e62783a6f9b4b36ac43ae0f73d02656

    //let response = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=4e62783a6f9b4b36ac43ae0f73d02656')

    //let responseText = await response.text()

    //console.log(responseText)

    const {GME, MSFT, DIS, BNTX} = mockData

    const stocks = [GME, MSFT, DIS, BNTX]
}

main()