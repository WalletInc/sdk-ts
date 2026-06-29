"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQRCodeDesignCreateParams = void 0;
class WTQRCodeDesignCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQRCodeDesignCreateParams.attributeTypeMap);
    }
}
exports.WTQRCodeDesignCreateParams = WTQRCodeDesignCreateParams;
WTQRCodeDesignCreateParams.discriminator = undefined;
WTQRCodeDesignCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTQRCodeDesignCreateParams.js.map