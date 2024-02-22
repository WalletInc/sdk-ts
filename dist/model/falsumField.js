"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FalsumField {
    static getAttributeTypeMap() {
        return FalsumField.attributeTypeMap;
    }
}
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
exports.FalsumField = FalsumField;
//# sourceMappingURL=falsumField.js.map