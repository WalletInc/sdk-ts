"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTFinancingSoftPullResponse = void 0;
class WTFinancingSoftPullResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTFinancingSoftPullResponse.attributeTypeMap);
    }
}
exports.WTFinancingSoftPullResponse = WTFinancingSoftPullResponse;
WTFinancingSoftPullResponse.discriminator = undefined;
WTFinancingSoftPullResponse.attributeTypeMap = [
    {
        "name": "authorizationRecordID",
        "baseName": "authorizationRecordID",
        "type": "any"
    },
    {
        "name": "qualificationTier",
        "baseName": "qualificationTier",
        "type": "any"
    },
    {
        "name": "bureaus",
        "baseName": "bureaus",
        "type": "any"
    },
    {
        "name": "result",
        "baseName": "result",
        "type": "any"
    }
];
//# sourceMappingURL=wTFinancingSoftPullResponse.js.map