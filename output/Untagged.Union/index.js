// Generated by purs version 0.13.6
"use strict";
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Foreign = require("../Foreign/index.js");
var Literals_Undefined = require("../Literals.Undefined/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Untagged_Coercible = require("../Untagged.Coercible/index.js");
var Untagged_TypeCheck = require("../Untagged.TypeCheck/index.js");
var Reducible = function (reduce) {
    this.reduce = reduce;
};
var InOneOf = {};
var withOneOf = function (dictHasRuntimeType) {
    return function (f) {
        return function (g) {
            return function (o) {
                var isTypeA = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
                var $27 = isTypeA(Foreign.unsafeToForeign(o));
                if ($27) {
                    return f(o);
                };
                return g(o);
            };
        };
    };
};
var toEither1 = function (dictHasRuntimeType) {
    return withOneOf(dictHasRuntimeType)(Data_Either.Left.create)(Data_Either.Right.create);
};
var reduceA = new Reducible(Data_Function.apply);
var reduce = function (dict) {
    return dict.reduce;
};
var reduceOneOf = function (dictReducible) {
    return function (dictHasRuntimeType) {
        return new Reducible(function (v) {
            return function (o) {
                var v1 = toEither1(dictHasRuntimeType)(o);
                if (v1 instanceof Data_Either.Left) {
                    return v.value0(v1.value0);
                };
                if (v1 instanceof Data_Either.Right) {
                    return reduce(dictReducible)(v.value1)(v1.value0);
                };
                throw new Error("Failed pattern match at Untagged.Union (line 141, column 5 - line 143, column 29): " + [ v1.constructor.name ]);
            };
        });
    };
};
var oneOfEq = function (dictEq) {
    return function (dictEq1) {
        return function (dictHasRuntimeType) {
            return new Data_Eq.Eq(function (o) {
                return function (o$prime) {
                    var v = toEither1(dictHasRuntimeType)(o$prime);
                    var v1 = toEither1(dictHasRuntimeType)(o);
                    if (v1 instanceof Data_Either.Left && v instanceof Data_Either.Left) {
                        return Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                    };
                    if (v1 instanceof Data_Either.Right && v instanceof Data_Either.Right) {
                        return Data_Eq.eq(dictEq1)(v1.value0)(v.value0);
                    };
                    return false;
                };
            });
        };
    };
};
var inOneOfTail = function (dictInOneOf) {
    return InOneOf;
};
var inOneOfLast = InOneOf;
var inOneOfHead = InOneOf;
var hasRuntimeTypeOneOf = function (dictHasRuntimeType) {
    return function (dictHasRuntimeType1) {
        return new Untagged_TypeCheck.HasRuntimeType(function (v) {
            return function (x) {
                return Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value)(x) || Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType1)(Type_Proxy["Proxy"].value)(x);
            };
        });
    };
};
var getRight$prime = function (dictHasRuntimeType) {
    return function (o) {
        var isTypeA = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        var $41 = isTypeA(Foreign.unsafeToForeign(o));
        if ($41) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(o);
    };
};
var uorToMaybe = getRight$prime(Untagged_TypeCheck.hasRuntimeTypeUndefined);
var getRight = function (dictHasRuntimeType) {
    return function (o) {
        var isTypeB = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        var $42 = isTypeB(Foreign.unsafeToForeign(o));
        if ($42) {
            return new Data_Maybe.Just(o);
        };
        return Data_Maybe.Nothing.value;
    };
};
var getLeft$prime = function (dictHasRuntimeType) {
    return function (o) {
        var isTypeB = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        var $43 = isTypeB(Foreign.unsafeToForeign(o));
        if ($43) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(o);
    };
};
var getLeft = function (dictHasRuntimeType) {
    return function (o) {
        var isTypeA = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        var $44 = isTypeA(Foreign.unsafeToForeign(o));
        if ($44) {
            return new Data_Maybe.Just(o);
        };
        return Data_Maybe.Nothing.value;
    };
};
var fromUndefinedOr = function (a) {
    var $48 = Data_Maybe.fromMaybe(a);
    return function ($49) {
        return $48(uorToMaybe($49));
    };
};
var fromOneOf = function (dictInOneOf) {
    return function (dictHasRuntimeType) {
        return function (f) {
            var $45 = Untagged_TypeCheck.hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value)(Foreign.unsafeToForeign(f));
            if ($45) {
                return Data_Maybe.Just.create(f);
            };
            return Data_Maybe.Nothing.value;
        };
    };
};
var defined = Unsafe_Coerce.unsafeCoerce;
var coercibleOneOf = function (dictInOneOf) {
    return Untagged_Coercible.Coercible;
};
var maybeToUor = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return v.value0;
    };
    if (v instanceof Data_Maybe.Nothing) {
        return Untagged_Coercible.coerce()(Literals_Undefined["undefined"]);
    };
    throw new Error("Failed pattern match at Untagged.Union (line 120, column 1 - line 120, column 49): " + [ v.constructor.name ]);
};
var withUor$prime = function (f) {
    return function (o) {
        return withOneOf(Untagged_TypeCheck.hasRuntimeTypeUndefined)(Data_Function["const"](Untagged_Coercible.coerce()(Literals_Undefined["undefined"])))(f)(o);
    };
};
var withUor = function (f) {
    return withUor$prime(function ($50) {
        return f($50);
    });
};
var asOneOf = function (dictCoercible) {
    return Untagged_Coercible.coerce();
};
module.exports = {
    InOneOf: InOneOf,
    asOneOf: asOneOf,
    fromOneOf: fromOneOf,
    toEither1: toEither1,
    getLeft: getLeft,
    "getLeft'": getLeft$prime,
    getRight: getRight,
    "getRight'": getRight$prime,
    defined: defined,
    uorToMaybe: uorToMaybe,
    maybeToUor: maybeToUor,
    withUor: withUor,
    fromUndefinedOr: fromUndefinedOr,
    Reducible: Reducible,
    reduce: reduce,
    oneOfEq: oneOfEq,
    hasRuntimeTypeOneOf: hasRuntimeTypeOneOf,
    inOneOfHead: inOneOfHead,
    inOneOfLast: inOneOfLast,
    inOneOfTail: inOneOfTail,
    coercibleOneOf: coercibleOneOf,
    reduceOneOf: reduceOneOf,
    reduceA: reduceA
};
