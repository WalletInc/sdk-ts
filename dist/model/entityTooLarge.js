"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTooLarge = void 0;
class EntityTooLarge {
    static getAttributeTypeMap() {
        return EntityTooLarge.attributeTypeMap;
    }
}
exports.EntityTooLarge = EntityTooLarge;
EntityTooLarge.discriminator = undefined;
EntityTooLarge.attributeTypeMap = [
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
//# sourceMappingURL=entityTooLarge.js.map