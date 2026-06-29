"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserDetails = void 0;
class BrowserDetails extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BrowserDetails.attributeTypeMap);
    }
}
exports.BrowserDetails = BrowserDetails;
BrowserDetails.discriminator = undefined;
BrowserDetails.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "any"
    },
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "any"
    },
    {
        "name": "sessionID",
        "baseName": "sessionID",
        "type": "any"
    },
    {
        "name": "navigatorAgent",
        "baseName": "navigatorAgent",
        "type": "any"
    },
    {
        "name": "referrer",
        "baseName": "referrer",
        "type": "any"
    }
];
//# sourceMappingURL=browserDetails.js.map