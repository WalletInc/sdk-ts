"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPassStyleResponseProviders = void 0;
class WTPassStyleResponseProviders {
    static getAttributeTypeMap() {
        return WTPassStyleResponseProviders.attributeTypeMap;
    }
}
exports.WTPassStyleResponseProviders = WTPassStyleResponseProviders;
WTPassStyleResponseProviders.discriminator = undefined;
WTPassStyleResponseProviders.attributeTypeMap = [
    {
        "name": "apple",
        "baseName": "apple",
        "type": "WTPassStyleResponseProvidersApple"
    },
    {
        "name": "google",
        "baseName": "google",
        "type": "WTPassStyleResponseProvidersApple"
    }
];
//# sourceMappingURL=wTPassStyleResponseProviders.js.map