"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenRequest = void 0;
class ForbiddenRequest {
    static getAttributeTypeMap() {
        return ForbiddenRequest.attributeTypeMap;
    }
}
exports.ForbiddenRequest = ForbiddenRequest;
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
//# sourceMappingURL=forbiddenRequest.js.map