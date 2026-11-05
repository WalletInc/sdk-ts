"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuOptionGroupUpdateParams = void 0;
class WTMenuOptionGroupUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuOptionGroupUpdateParams.attributeTypeMap);
    }
}
exports.WTMenuOptionGroupUpdateParams = WTMenuOptionGroupUpdateParams;
WTMenuOptionGroupUpdateParams.discriminator = undefined;
WTMenuOptionGroupUpdateParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTMenuOptionGroupUpdateParams.js.map