"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError500 = void 0;
class InternalServerError500 extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InternalServerError500.attributeTypeMap);
    }
}
exports.InternalServerError500 = InternalServerError500;
InternalServerError500.discriminator = undefined;
InternalServerError500.attributeTypeMap = [
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
//# sourceMappingURL=internalServerError500.js.map