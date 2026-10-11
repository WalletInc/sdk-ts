"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomDomainRequest = void 0;
class WTCustomDomainRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomDomainRequest.attributeTypeMap);
    }
}
exports.WTCustomDomainRequest = WTCustomDomainRequest;
WTCustomDomainRequest.discriminator = undefined;
WTCustomDomainRequest.attributeTypeMap = [
    {
        "name": "hostname",
        "baseName": "hostname",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomDomainRequest.js.map