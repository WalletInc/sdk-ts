"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsumError = void 0;
class FalsumError {
    static getAttributeTypeMap() {
        return FalsumError.attributeTypeMap;
    }
}
FalsumError.discriminator = undefined;
FalsumError.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "Array<FalsumField>"
    }
];
exports.FalsumError = FalsumError;
//# sourceMappingURL=falsumError.js.map