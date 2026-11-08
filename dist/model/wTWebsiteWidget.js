"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWebsiteWidget = void 0;
class WTWebsiteWidget extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWebsiteWidget.attributeTypeMap);
    }
}
exports.WTWebsiteWidget = WTWebsiteWidget;
WTWebsiteWidget.discriminator = undefined;
WTWebsiteWidget.attributeTypeMap = [
    {
        "name": "origins",
        "baseName": "origins",
        "type": "any"
    },
    {
        "name": "walletHost",
        "baseName": "walletHost",
        "type": "any"
    },
    {
        "name": "walletID",
        "baseName": "walletID",
        "type": "any"
    },
    {
        "name": "markRemovable",
        "baseName": "markRemovable",
        "type": "any"
    }
];
//# sourceMappingURL=wTWebsiteWidget.js.map