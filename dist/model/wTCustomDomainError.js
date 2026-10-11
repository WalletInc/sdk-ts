"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomDomainError = void 0;
class WTCustomDomainError extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomDomainError.attributeTypeMap);
    }
}
exports.WTCustomDomainError = WTCustomDomainError;
WTCustomDomainError.discriminator = undefined;
WTCustomDomainError.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "any"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "any"
    },
    {
        "name": "helpURL",
        "baseName": "helpURL",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomDomainError.js.map