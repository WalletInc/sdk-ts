"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NotFound.attributeTypeMap);
    }
}
exports.NotFound = NotFound;
NotFound.discriminator = undefined;
NotFound.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "any"
    },
    {
        "name": "stack",
        "baseName": "stack",
        "type": "any"
    },
    {
        "name": "httpErrorCode",
        "baseName": "httpErrorCode",
        "type": "any"
    },
    {
        "name": "trackingCode",
        "baseName": "trackingCode",
        "type": "any"
    }
];
//# sourceMappingURL=notFound.js.map