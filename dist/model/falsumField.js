"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsumField = void 0;
class FalsumField extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FalsumField.attributeTypeMap);
    }
}
exports.FalsumField = FalsumField;
FalsumField.discriminator = undefined;
FalsumField.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "any"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "any"
    }
];
//# sourceMappingURL=falsumField.js.map