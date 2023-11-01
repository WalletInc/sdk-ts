"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserDetails = void 0;
class BrowserDetails {
    static getAttributeTypeMap() {
        return BrowserDetails.attributeTypeMap;
    }
}
exports.BrowserDetails = BrowserDetails;
BrowserDetails.discriminator = undefined;
BrowserDetails.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "string"
    },
    {
        "name": "sessionID",
        "baseName": "sessionID",
        "type": "string"
    },
    {
        "name": "navigatorAgent",
        "baseName": "navigatorAgent",
        "type": "string"
    },
    {
        "name": "referrer",
        "baseName": "referrer",
        "type": "string"
    }
];
//# sourceMappingURL=browserDetails.js.map