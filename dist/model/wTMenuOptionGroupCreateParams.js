"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuOptionGroupCreateParams = void 0;
class WTMenuOptionGroupCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuOptionGroupCreateParams.attributeTypeMap);
    }
}
exports.WTMenuOptionGroupCreateParams = WTMenuOptionGroupCreateParams;
WTMenuOptionGroupCreateParams.discriminator = undefined;
WTMenuOptionGroupCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTMenuOptionGroupCreateParams.js.map