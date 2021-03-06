// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Foreign = require("../Foreign/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var HasRuntimeTypeRecordRL = function (hasRuntimeTypeRecRL) {
    this.hasRuntimeTypeRecRL = hasRuntimeTypeRecRL;
};
var HasRuntimeType = function (hasRuntimeType) {
    this.hasRuntimeType = hasRuntimeType;
};
var hasRuntimeTypeRecordRLNil = new HasRuntimeTypeRecordRL(function (v) {
    return function (v1) {
        return true;
    };
});
var hasRuntimeTypeRecRL = function (dict) {
    return dict.hasRuntimeTypeRecRL;
};
var hasRuntimeTypeInt = new HasRuntimeType(function (v) {
    return $foreign.isInt;
});
var hasRuntimeTypeForeign = new HasRuntimeType(function (v) {
    return function (v1) {
        return true;
    };
});
var hasRuntimeType = function (dict) {
    return dict.hasRuntimeType;
};
var hasRuntimeTypeRecordRLCons = function (dictHasRuntimeTypeRecordRL) {
    return function (dictHasRuntimeType) {
        return function (dictIsSymbol) {
            return new HasRuntimeTypeRecordRL(function (v) {
                return function (x) {
                    var propertyName = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                    var property = $foreign.getProperty(propertyName)(x);
                    var hasRuntimeTypeA = hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
                    return hasRuntimeTypeA(property) && hasRuntimeTypeRecRL(dictHasRuntimeTypeRecordRL)(Type_Data_RowList.RLProxy.value)(x);
                };
            });
        };
    };
};
var newtypeHasRuntimeType = function (dictNewtype) {
    return function (dictHasRuntimeType) {
        return function (v) {
            return hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        };
    };
};
var hasJsType = function (name) {
    return function (x) {
        return Foreign.typeOf(x) === name;
    };
};
var hasRuntimeTypeBoolean = new HasRuntimeType(function (v) {
    return hasJsType("boolean");
});
var hasRuntimeTypeNumber = new HasRuntimeType(function (v) {
    return hasJsType("number");
});
var hasRuntimeTypeObject = function (dictHasRuntimeType) {
    return new HasRuntimeType(function (v) {
        return function (x) {
            var hasRuntimeTypeE = hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
            return hasJsType("object")(x) && Foreign_Object.all(function (v1) {
                return hasRuntimeTypeE;
            })(x);
        };
    });
};
var hasRuntimeTypeRecord = function (dictRowToList) {
    return function (dictHasRuntimeTypeRecordRL) {
        return new HasRuntimeType(function (v) {
            return function (x) {
                return hasJsType("object")(x) && hasRuntimeTypeRecRL(dictHasRuntimeTypeRecordRL)(Type_Data_RowList.RLProxy.value)(Foreign.unsafeToForeign(x));
            };
        });
    };
};
var hasRuntimeTypeString = new HasRuntimeType(function (v) {
    return hasJsType("string");
});
var hasRuntimeTypeUndefined = new HasRuntimeType(function (v) {
    return hasJsType("undefined");
});
var cast = function (dictHasRuntimeType) {
    return function (x) {
        var hasRuntimeTypeA = hasRuntimeType(dictHasRuntimeType)(Type_Proxy["Proxy"].value);
        var $23 = hasRuntimeTypeA(Foreign.unsafeToForeign(x));
        if ($23) {
            return new Data_Maybe.Just(x);
        };
        return Data_Maybe.Nothing.value;
    };
};
module.exports = {
    HasRuntimeType: HasRuntimeType,
    hasRuntimeType: hasRuntimeType,
    newtypeHasRuntimeType: newtypeHasRuntimeType,
    HasRuntimeTypeRecordRL: HasRuntimeTypeRecordRL,
    hasRuntimeTypeRecRL: hasRuntimeTypeRecRL,
    cast: cast,
    hasRuntimeTypeUndefined: hasRuntimeTypeUndefined,
    hasRuntimeTypeBoolean: hasRuntimeTypeBoolean,
    hasRuntimeTypeInt: hasRuntimeTypeInt,
    hasRuntimeTypeNumber: hasRuntimeTypeNumber,
    hasRuntimeTypeString: hasRuntimeTypeString,
    hasRuntimeTypeForeign: hasRuntimeTypeForeign,
    hasRuntimeTypeObject: hasRuntimeTypeObject,
    hasRuntimeTypeRecord: hasRuntimeTypeRecord,
    hasRuntimeTypeRecordRLNil: hasRuntimeTypeRecordRLNil,
    hasRuntimeTypeRecordRLCons: hasRuntimeTypeRecordRLCons
};
