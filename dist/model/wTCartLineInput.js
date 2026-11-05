"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCartLineInput = void 0;
class WTCartLineInput extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCartLineInput.attributeTypeMap);
    }
}
exports.WTCartLineInput = WTCartLineInput;
WTCartLineInput.discriminator = undefined;
WTCartLineInput.attributeTypeMap = [
    {
        "name": "itemID",
        "baseName": "itemID",
        "type": "any"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "any"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "any"
    },
    {
        "name": "optionIDs",
        "baseName": "optionIDs",
        "type": "any"
    },
    {
        "name": "menuID",
        "baseName": "menuID",
        "type": "any"
    },
    {
        "name": "expectedUnitAmountCents",
        "baseName": "expectedUnitAmountCents",
        "type": "any"
    }
];
//# sourceMappingURL=wTCartLineInput.js.map