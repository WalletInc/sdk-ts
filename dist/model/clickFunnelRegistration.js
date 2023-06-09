"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelRegistration = void 0;
class ClickFunnelRegistration {
    static getAttributeTypeMap() {
        return ClickFunnelRegistration.attributeTypeMap;
    }
}
ClickFunnelRegistration.discriminator = undefined;
ClickFunnelRegistration.attributeTypeMap = [
    {
        "name": "contact",
        "baseName": "contact",
        "type": "ClickFunnelContact"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "string"
    }
];
exports.ClickFunnelRegistration = ClickFunnelRegistration;
//# sourceMappingURL=clickFunnelRegistration.js.map