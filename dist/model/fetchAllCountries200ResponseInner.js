"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllCountries200ResponseInner = void 0;
class FetchAllCountries200ResponseInner {
    static getAttributeTypeMap() {
        return FetchAllCountries200ResponseInner.attributeTypeMap;
    }
}
exports.FetchAllCountries200ResponseInner = FetchAllCountries200ResponseInner;
FetchAllCountries200ResponseInner.discriminator = undefined;
FetchAllCountries200ResponseInner.attributeTypeMap = [
    {
        "name": "currencyAbbreviation",
        "baseName": "currency_abbreviation",
        "type": "string"
    },
    {
        "name": "phoneCode",
        "baseName": "phone_code",
        "type": "string"
    },
    {
        "name": "iso2",
        "baseName": "iso2",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=fetchAllCountries200ResponseInner.js.map