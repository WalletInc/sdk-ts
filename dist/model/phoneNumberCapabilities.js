"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberCapabilities = void 0;
class PhoneNumberCapabilities {
    static getAttributeTypeMap() {
        return PhoneNumberCapabilities.attributeTypeMap;
    }
}
exports.PhoneNumberCapabilities = PhoneNumberCapabilities;
PhoneNumberCapabilities.discriminator = undefined;
PhoneNumberCapabilities.attributeTypeMap = [
    {
        "name": "fax",
        "baseName": "fax",
        "type": "boolean"
    },
    {
        "name": "voice",
        "baseName": "voice",
        "type": "boolean"
    },
    {
        "name": "sms",
        "baseName": "sms",
        "type": "boolean"
    },
    {
        "name": "mms",
        "baseName": "mms",
        "type": "boolean"
    }
];
//# sourceMappingURL=phoneNumberCapabilities.js.map