"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateRowFound = void 0;
class DuplicateRowFound {
    static getAttributeTypeMap() {
        return DuplicateRowFound.attributeTypeMap;
    }
}
exports.DuplicateRowFound = DuplicateRowFound;
DuplicateRowFound.discriminator = undefined;
DuplicateRowFound.attributeTypeMap = [
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
//# sourceMappingURL=duplicateRowFound.js.map