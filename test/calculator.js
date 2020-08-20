const Calc = require('../index');
const expect = require("chai").expect;

describe("Land Transfer Tax Calculation", function() {
    describe("Calculate Purchase Price in different Brackets", function() {
        it('Calculate Purchase Price bracket 1', function(){
            const tax = Calc.calculate({ purchasePrice: 54000 });
            expect(tax).to.eql(270);
        });
        it('Calculate Purchase Price bracket 2', function () {
            const tax = Calc.calculate({ purchasePrice: 56000 });
            expect(tax).to.eql(285);
        });
        it('Calculate Purchase Price bracket 3', function () {
            const tax = Calc.calculate({ purchasePrice: 259000 });
            expect(tax).to.eql(2360);
        });
        it('Calculate Purchase Price bracket 4', function () {
            const tax = Calc.calculate({ purchasePrice: 1500000 });
            expect(tax).to.eql(26475);
        });
        it('Calculate Purchase Price bracket 5', function () {
            const tax = Calc.calculate({ purchasePrice: 2500000 });
            expect(tax).to.eql(48975);
        });
    });
});