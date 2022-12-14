"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsumField = void 0;
class FalsumField {
    static getAttributeTypeMap() {
        return FalsumField.attributeTypeMap;
    }
}
exports.FalsumField = FalsumField;
FalsumField.discriminator = undefined;
FalsumField.attributeTypeMap = [
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
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
//# sourceMappingURL=falsumField.js.map