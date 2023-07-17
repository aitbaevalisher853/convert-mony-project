const RATES = {
    usd: 87.87,
    eur: 98.72
}


function convert({ som, currency }) {
    if (!RATES[currency]) {
        return null;
    }

    return som * RATES[currency];
}