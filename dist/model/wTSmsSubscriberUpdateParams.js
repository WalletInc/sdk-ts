"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsSubscriberUpdateParams = void 0;
class WTSmsSubscriberUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsSubscriberUpdateParams.attributeTypeMap);
    }
}
exports.WTSmsSubscriberUpdateParams = WTSmsSubscriberUpdateParams;
WTSmsSubscriberUpdateParams.discriminator = undefined;
WTSmsSubscriberUpdateParams.attributeTypeMap = [
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    }
];
//# sourceMappingURL=wTSmsSubscriberUpdateParams.js.map