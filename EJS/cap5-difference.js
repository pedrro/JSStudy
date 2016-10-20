var ANCESTRY_FILE = require('./support/ancestry.js');

function Difference() {}
var ancestry = JSON.parse(ANCESTRY_FILE);

Difference.prototype.getFamily = function() {
    byName = {};
    ancestry.forEach(function(person) {
        byName[person.name] = person;
    });

    return byName;
};

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

Difference.prototype.getAverageMotherAge = function(family) {
    var ages = [];

    ancestry.forEach(function(person) {
        if (family[person.mother]) {
            var mother = family[person.mother];
            ages.push(mother.died - mother.born);
        }
    });

    return Math.round(average(ages), 2);
};

module.exports = Difference;
