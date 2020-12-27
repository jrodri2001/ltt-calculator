"use strict";

const methods = {
    calculate,
};

const discountToronto = 8475;
const discount = 4000;

const brackets = [
    {
        from: 0,
        to: 55000,
        rate: 0.005
    },
    {
        from: 55000,
        to: 250000,
        rate: 0.01
    },
    {
        from: 250000,
        to: 400000,
        rate: 0.015
    },
    {
        from: 400000,
        to: 2000000,
        rate: 0.02
    },
    {
        from: 2000000,
        to: 100000000,
        rate: 0.025
    },
];

function calculate(options = { purchasePrice: 0, isToronto: false, firstTimeBuyer: false }) {
    let total = 0;

    if (!options.purchasePrice || Number.isNaN(Number(options.purchasePrice))) {
        return 0;
    }

    let remaining = options.purchasePrice;
    let tax = 0;

    brackets.forEach((bracket, index) => {
        let amount = (options.purchasePrice > bracket.to) ? bracket.to - bracket.from : remaining;
        tax = amount * bracket.rate;
        total += tax;
        remaining = remaining - amount;
    });

    if (options.isToronto) {
        total = total * 2;
    }

    if (options.firstTimeBuyer) {
        const d = (options.isToronto) ? discountToronto : discount;
        total = Math.max(0, total - d);
    }

    return total;
}

module.exports = exports = methods;