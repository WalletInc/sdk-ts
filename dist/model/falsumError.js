"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsumError = void 0;
class FalsumError {
    static getAttributeTypeMap() {
        return FalsumError.attributeTypeMap;
    }
}
exports.FalsumError = FalsumError;
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
//# sourceMappingURL=falsumError.js.map