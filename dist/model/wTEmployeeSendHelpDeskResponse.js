"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeSendHelpDeskResponse {
    static getAttributeTypeMap() {
        return WTEmployeeSendHelpDeskResponse.attributeTypeMap;
    }
}
WTEmployeeSendHelpDeskResponse.discriminator = undefined;
WTEmployeeSendHelpDeskResponse.attributeTypeMap = [
    {
        "name": "helpDeskRequestID",
        "baseName": "helpDeskRequestID",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    }
];
exports.WTEmployeeSendHelpDeskResponse = WTEmployeeSendHelpDeskResponse;
//# sourceMappingURL=wTEmployeeSendHelpDeskResponse.js.map