"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptInListSource = void 0;
class OptInListSource extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OptInListSource.attributeTypeMap);
    }
}
exports.OptInListSource = OptInListSource;
OptInListSource.discriminator = undefined;
OptInListSource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    },
    {
        "name": "sourceName",
        "baseName": "sourceName",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=optInListSource.js.map