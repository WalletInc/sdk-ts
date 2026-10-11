"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomDomainTXT = void 0;
class WTCustomDomainTXT extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomDomainTXT.attributeTypeMap);
    }
}
exports.WTCustomDomainTXT = WTCustomDomainTXT;
WTCustomDomainTXT.discriminator = undefined;
WTCustomDomainTXT.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomDomainTXT.js.map