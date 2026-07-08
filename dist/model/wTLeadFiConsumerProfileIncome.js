"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLeadFiConsumerProfileIncome = void 0;
class WTLeadFiConsumerProfileIncome {
    static getAttributeTypeMap() {
        return WTLeadFiConsumerProfileIncome.attributeTypeMap;
    }
}
exports.WTLeadFiConsumerProfileIncome = WTLeadFiConsumerProfileIncome;
WTLeadFiConsumerProfileIncome.discriminator = undefined;
WTLeadFiConsumerProfileIncome.attributeTypeMap = [
    {
        "name": "household",
        "baseName": "household",
        "type": "any"
    },
    {
        "name": "personal",
        "baseName": "personal",
        "type": "any"
    },
    {
        "name": "estimate",
        "baseName": "estimate",
        "type": "any"
    }
];
//# sourceMappingURL=wTLeadFiConsumerProfileIncome.js.map