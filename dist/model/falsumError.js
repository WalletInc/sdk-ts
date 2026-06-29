"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsumError = void 0;
class FalsumError extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FalsumError.attributeTypeMap);
    }
}
exports.FalsumError = FalsumError;
FalsumError.discriminator = undefined;
FalsumError.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "any"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "any"
    }
];
//# sourceMappingURL=falsumError.js.map