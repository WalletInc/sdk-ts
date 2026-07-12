"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOrderLineItem = void 0;
class WTOrderLineItem extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOrderLineItem.attributeTypeMap);
    }
}
exports.WTOrderLineItem = WTOrderLineItem;
WTOrderLineItem.discriminator = undefined;
WTOrderLineItem.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "productID",
        "baseName": "productID",
        "type": "AmenityId"
    },
    {
        "name": "serviceID",
        "baseName": "serviceID",
        "type": "AmenityId"
    },
    {
        "name": "titleSnapshot",
        "baseName": "titleSnapshot",
        "type": "any"
    },
    {
        "name": "unitAmount",
        "baseName": "unitAmount",
        "type": "any"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "any"
    }
];
//# sourceMappingURL=wTOrderLineItem.js.map