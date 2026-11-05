"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuOptionGroup = void 0;
class WTMenuOptionGroup extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuOptionGroup.attributeTypeMap);
    }
}
exports.WTMenuOptionGroup = WTMenuOptionGroup;
WTMenuOptionGroup.discriminator = undefined;
WTMenuOptionGroup.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "minChoices",
        "baseName": "minChoices",
        "type": "any"
    },
    {
        "name": "maxChoices",
        "baseName": "maxChoices",
        "type": "any"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuOptionGroup.js.map