"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLeadFiConsumerProfile = void 0;
class WTLeadFiConsumerProfile extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTLeadFiConsumerProfile.attributeTypeMap);
    }
}
exports.WTLeadFiConsumerProfile = WTLeadFiConsumerProfile;
WTLeadFiConsumerProfile.discriminator = undefined;
WTLeadFiConsumerProfile.attributeTypeMap = [
    {
        "name": "age",
        "baseName": "age",
        "type": "any"
    },
    {
        "name": "phones",
        "baseName": "phones",
        "type": "any"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "WTLeadFiConsumerProfileAddress"
    },
    {
        "name": "income",
        "baseName": "income",
        "type": "WTLeadFiConsumerProfileIncome"
    },
    {
        "name": "assets",
        "baseName": "assets",
        "type": "WTLeadFiConsumerProfileAssets"
    }
];
//# sourceMappingURL=wTLeadFiConsumerProfile.js.map