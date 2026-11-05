"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCartPriceRequest = void 0;
class WTCartPriceRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCartPriceRequest.attributeTypeMap);
    }
}
exports.WTCartPriceRequest = WTCartPriceRequest;
WTCartPriceRequest.discriminator = undefined;
WTCartPriceRequest.attributeTypeMap = [
    {
        "name": "lines",
        "baseName": "lines",
        "type": "any"
    }
];
//# sourceMappingURL=wTCartPriceRequest.js.map