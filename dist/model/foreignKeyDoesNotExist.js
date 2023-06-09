"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForeignKeyDoesNotExist = void 0;
class ForeignKeyDoesNotExist {
    static getAttributeTypeMap() {
        return ForeignKeyDoesNotExist.attributeTypeMap;
    }
}
ForeignKeyDoesNotExist.discriminator = undefined;
ForeignKeyDoesNotExist.attributeTypeMap = [
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
exports.ForeignKeyDoesNotExist = ForeignKeyDoesNotExist;
//# sourceMappingURL=foreignKeyDoesNotExist.js.map