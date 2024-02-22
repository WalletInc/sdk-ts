"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InternalServerError {
    static getAttributeTypeMap() {
        return InternalServerError.attributeTypeMap;
    }
}
InternalServerError.discriminator = undefined;
InternalServerError.attributeTypeMap = [
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
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=internalServerError.js.map