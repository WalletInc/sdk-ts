"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomDomain = void 0;
class WTCustomDomain extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomDomain.attributeTypeMap);
    }
}
exports.WTCustomDomain = WTCustomDomain;
WTCustomDomain.discriminator = undefined;
WTCustomDomain.attributeTypeMap = [
    {
        "name": "hostname",
        "baseName": "hostname",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "WTCustomDomainState"
    },
    {
        "name": "managed",
        "baseName": "managed",
        "type": "any"
    },
    {
        "name": "dnsTarget",
        "baseName": "dnsTarget",
        "type": "any"
    },
    {
        "name": "txt",
        "baseName": "txt",
        "type": "WTCustomDomainTXT"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "WTCustomDomainError"
    },
    {
        "name": "paused",
        "baseName": "paused",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomDomain.js.map