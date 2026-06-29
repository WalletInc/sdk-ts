"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCountResult = void 0;
class WTCountResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCountResult.attributeTypeMap);
    }
}
exports.WTCountResult = WTCountResult;
WTCountResult.discriminator = undefined;
WTCountResult.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    }
];
//# sourceMappingURL=wTCountResult.js.map