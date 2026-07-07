"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTFinancingSoftPullRequest = void 0;
class WTFinancingSoftPullRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTFinancingSoftPullRequest.attributeTypeMap);
    }
}
exports.WTFinancingSoftPullRequest = WTFinancingSoftPullRequest;
WTFinancingSoftPullRequest.discriminator = undefined;
WTFinancingSoftPullRequest.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "disclosureText",
        "baseName": "disclosureText",
        "type": "any"
    }
];
//# sourceMappingURL=wTFinancingSoftPullRequest.js.map