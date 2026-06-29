"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeSendHelpDeskResponse = void 0;
class WTEmployeeSendHelpDeskResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeSendHelpDeskResponse.attributeTypeMap);
    }
}
exports.WTEmployeeSendHelpDeskResponse = WTEmployeeSendHelpDeskResponse;
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
        "type": "any"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeSendHelpDeskResponse.js.map