"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMediaUploadTicket = void 0;
class WTMediaUploadTicket extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMediaUploadTicket.attributeTypeMap);
    }
}
exports.WTMediaUploadTicket = WTMediaUploadTicket;
WTMediaUploadTicket.discriminator = undefined;
WTMediaUploadTicket.attributeTypeMap = [
    {
        "name": "mediaFile",
        "baseName": "mediaFile",
        "type": "WTMediaFile"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "expiresAt",
        "baseName": "expiresAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTMediaUploadTicket.js.map