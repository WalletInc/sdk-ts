"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEarlyOptInPage = void 0;
class WTEarlyOptInPage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEarlyOptInPage.attributeTypeMap);
    }
}
exports.WTEarlyOptInPage = WTEarlyOptInPage;
WTEarlyOptInPage.discriminator = undefined;
WTEarlyOptInPage.attributeTypeMap = [
    {
        "name": "rows",
        "baseName": "rows",
        "type": "any"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "any"
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "any"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "any"
    },
    {
        "name": "hasMore",
        "baseName": "hasMore",
        "type": "any"
    }
];
//# sourceMappingURL=wTEarlyOptInPage.js.map