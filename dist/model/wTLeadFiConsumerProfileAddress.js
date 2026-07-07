"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLeadFiConsumerProfileAddress = void 0;
class WTLeadFiConsumerProfileAddress {
    static getAttributeTypeMap() {
        return WTLeadFiConsumerProfileAddress.attributeTypeMap;
    }
}
exports.WTLeadFiConsumerProfileAddress = WTLeadFiConsumerProfileAddress;
WTLeadFiConsumerProfileAddress.discriminator = undefined;
WTLeadFiConsumerProfileAddress.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "any"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "any"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "any"
    }
];
//# sourceMappingURL=wTLeadFiConsumerProfileAddress.js.map