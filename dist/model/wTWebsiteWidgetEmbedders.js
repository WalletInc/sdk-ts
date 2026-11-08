"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWebsiteWidgetEmbedders = void 0;
class WTWebsiteWidgetEmbedders extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWebsiteWidgetEmbedders.attributeTypeMap);
    }
}
exports.WTWebsiteWidgetEmbedders = WTWebsiteWidgetEmbedders;
WTWebsiteWidgetEmbedders.discriminator = undefined;
WTWebsiteWidgetEmbedders.attributeTypeMap = [
    {
        "name": "origins",
        "baseName": "origins",
        "type": "any"
    },
    {
        "name": "markRemovable",
        "baseName": "markRemovable",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTWebsiteWidgetEmbedders.js.map