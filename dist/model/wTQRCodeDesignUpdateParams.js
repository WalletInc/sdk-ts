"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQRCodeDesignUpdateParams = void 0;
class WTQRCodeDesignUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQRCodeDesignUpdateParams.attributeTypeMap);
    }
}
exports.WTQRCodeDesignUpdateParams = WTQRCodeDesignUpdateParams;
WTQRCodeDesignUpdateParams.discriminator = undefined;
WTQRCodeDesignUpdateParams.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "serializedJsonConfiguration",
        "baseName": "serializedJsonConfiguration",
        "type": "object"
    },
    {
        "name": "serializedJsonBorder",
        "baseName": "serializedJsonBorder",
        "type": "object"
    }
];
//# sourceMappingURL=wTQRCodeDesignUpdateParams.js.map