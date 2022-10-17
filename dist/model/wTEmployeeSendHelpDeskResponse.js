"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeSendHelpDeskResponse = void 0;
class WTEmployeeSendHelpDeskResponse {
    static getAttributeTypeMap() {
        return WTEmployeeSendHelpDeskResponse.attributeTypeMap;
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
        "type": "string"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmployeeSendHelpDeskResponse.js.map