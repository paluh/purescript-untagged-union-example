// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Gen = require("../Control.Monad.Gen/index.js");
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var genTuple = function (dictApply) {
    return Control_Apply.lift2(dictApply)(Data_Tuple.Tuple.create);
};
var genNonEmpty = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (dictUnfoldable) {
            return function (gen) {
                return Control_Apply.apply(((dictMonadGen.Monad0()).Bind1()).Apply0())(Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_NonEmpty.NonEmpty.create)(gen))(Control_Monad_Gen_Class.resize(dictMonadGen)((function () {
                    var $12 = Data_Ord.max(Data_Ord.ordInt)(0);
                    return function ($13) {
                        return $12((function (v) {
                            return v - 1 | 0;
                        })($13));
                    };
                })())(Control_Monad_Gen.unfoldable(dictMonadRec)(dictMonadGen)(dictUnfoldable)(gen)));
            };
        };
    };
};
var genMaybe$prime = function (dictMonadGen) {
    return function (bias) {
        return function (gen) {
            return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(1.0))(function (n) {
                var $10 = n < bias;
                if ($10) {
                    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Maybe.Just.create)(gen);
                };
                return Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0())(Data_Maybe.Nothing.value);
            });
        };
    };
};
var genMaybe = function (dictMonadGen) {
    return genMaybe$prime(dictMonadGen)(0.75);
};
var genIdentity = function (dictFunctor) {
    return Data_Functor.map(dictFunctor)(Data_Identity.Identity);
};
var genEither$prime = function (dictMonadGen) {
    return function (bias) {
        return function (genA) {
            return function (genB) {
                return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(1.0))(function (n) {
                    var $11 = n < bias;
                    if ($11) {
                        return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Left.create)(genA);
                    };
                    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Right.create)(genB);
                });
            };
        };
    };
};
var genEither = function (dictMonadGen) {
    return genEither$prime(dictMonadGen)(0.5);
};
module.exports = {
    genEither: genEither,
    "genEither'": genEither$prime,
    genIdentity: genIdentity,
    genMaybe: genMaybe,
    "genMaybe'": genMaybe$prime,
    genTuple: genTuple,
    genNonEmpty: genNonEmpty
};
