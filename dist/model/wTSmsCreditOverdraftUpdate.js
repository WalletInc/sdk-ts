"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsCreditOverdraftUpdate = void 0;
class WTSmsCreditOverdraftUpdate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsCreditOverdraftUpdate.attributeTypeMap);
    }
}
exports.WTSmsCreditOverdraftUpdate = WTSmsCreditOverdraftUpdate;
WTSmsCreditOverdraftUpdate.discriminator = undefined;
WTSmsCreditOverdraftUpdate.attributeTypeMap = [
    {
        "name": "overdraft",
        "baseName": "overdraft",
        "type": "any"
    }
];
//# sourceMappingURL=wTSmsCreditOverdraftUpdate.js.map