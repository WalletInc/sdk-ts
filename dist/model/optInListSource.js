"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptInListSource = void 0;
class OptInListSource {
    static getAttributeTypeMap() {
        return OptInListSource.attributeTypeMap;
    }
}
OptInListSource.discriminator = undefined;
OptInListSource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    },
    {
        "name": "sourceName",
        "baseName": "sourceName",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.OptInListSource = OptInListSource;
//# sourceMappingURL=optInListSource.js.map