"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserDetails = void 0;
class BrowserDetails {
    static getAttributeTypeMap() {
        return BrowserDetails.attributeTypeMap;
    }
}
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
    }
];
exports.BrowserDetails = BrowserDetails;
//# sourceMappingURL=browserDetails.js.map