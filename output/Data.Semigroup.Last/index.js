// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Last = function (x) {
    return x;
};
var showLast = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Last " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
    return function (x) {
        return x;
    };
});
var ordLast = function (dictOrd) {
    return dictOrd;
};
var functorLast = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqLast = function (dictEq) {
    return dictEq;
};
var eq1Last = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqLast(dictEq));
});
var ord1Last = new Data_Ord.Ord1(function () {
    return eq1Last;
}, function (dictOrd) {
    return Data_Ord.compare(ordLast(dictOrd));
});
var boundedLast = function (dictBounded) {
    return dictBounded;
};
var applyLast = new Control_Apply.Apply(function () {
    return functorLast;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindLast = new Control_Bind.Bind(function () {
    return applyLast;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeLast = new Control_Applicative.Applicative(function () {
    return applyLast;
}, Last);
var monadLast = new Control_Monad.Monad(function () {
    return applicativeLast;
}, function () {
    return bindLast;
});
module.exports = {
    Last: Last,
    eqLast: eqLast,
    eq1Last: eq1Last,
    ordLast: ordLast,
    ord1Last: ord1Last,
    boundedLast: boundedLast,
    showLast: showLast,
    functorLast: functorLast,
    applyLast: applyLast,
    applicativeLast: applicativeLast,
    bindLast: bindLast,
    monadLast: monadLast,
    semigroupLast: semigroupLast
};
