"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForbiddenRequest {
    static getAttributeTypeMap() {
        return ForbiddenRequest.attributeTypeMap;
    }
}
ForbiddenRequest.discriminator = undefined;
ForbiddenRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "stack",
        "baseName": "stack",
        "type": "string"
    },
    {
        "name": "httpErrorCode",
        "baseName": "httpErrorCode",
        "type": "number"
    },
    {
        "name": "trackingCode",
        "baseName": "trackingCode",
        "type": "string"
    }
];
exports.ForbiddenRequest = ForbiddenRequest;
//# sourceMappingURL=forbiddenRequest.js.map