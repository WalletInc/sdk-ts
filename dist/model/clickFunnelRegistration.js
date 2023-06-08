"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelRegistration = void 0;
class ClickFunnelRegistration {
    static getAttributeTypeMap() {
        return ClickFunnelRegistration.attributeTypeMap;
    }
}
exports.ClickFunnelRegistration = ClickFunnelRegistration;
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
//# sourceMappingURL=clickFunnelRegistration.js.map