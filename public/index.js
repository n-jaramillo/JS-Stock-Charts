async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const { GME, MSFT, DIS, BNTX } = mockData

    const stocks = [GME, MSFT, DIS, BNTX]

    stocks.forEach(stock => stock.values.reverse())

    // Time Chart
    const timeChart = new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });

    // Highest Chart
    const highestChart = new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: stocks.map(stock => (stock.meta.symbol)),
            datasets: [{
                label: 'Highest',
                data: stocks.map(stock => getHighestPrice(stock)),
                backgroundColor: stocks.map(stock => getColor(stock.meta.symbol)),
                borderColor: stocks.map(stock => getColor(stock.meta.symbol)),
            }]
        }
    });

    // Function to get the highest price for each stock symbol
    function getHighestPrice(stock) {
        let values = stock.values.map(value => value.high)
        let highestStockPrice = values[0];

        let highest = values.forEach(function (value) {
            if (value > highestStockPrice) {
                highestStockPrice = value
            }
        })
        return highestStockPrice
    }

    // Average Chart
    const avgChart = new Chart(averagePriceChartCanvas.getContext('2d'), {
        type: 'pie',
        data: {
            labels: stocks.map(stock => (stock.meta.symbol)),
            datasets: [{
                label: 'Highest',
                data: stocks.map(stock => getAverageStock(stock)),
                backgroundColor: stocks.map(stock => getColor(stock.meta.symbol)),
                borderColor: stocks.map(stock => getColor(stock.meta.symbol)),
            }]
        }
    });

    // Function to get the average price of each stock symbol
    function getAverageStock(stock) {
        let average = 0;

        let values = stock.values.map(value => ((parseFloat(value.high) + parseFloat(value.low)) / 2))

        values.forEach((value) => { average += value })

        average = average / values.length

        return average
    }

    // Function to change color based off stock symbol
    function getColor(stock) {
        if (stock === "GME") {
            return 'rgba(61, 161, 61, 0.7)'
        }
        if (stock === "MSFT") {
            return 'rgba(209, 4, 25, 0.7)'
        }
        if (stock === "DIS") {
            return 'rgba(18, 4, 209, 0.7)'
        }
        if (stock === "BNTX") {
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
}


main()