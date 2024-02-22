"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneNumberCapabilities {
    static getAttributeTypeMap() {
        return PhoneNumberCapabilities.attributeTypeMap;
    }
}
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
exports.PhoneNumberCapabilities = PhoneNumberCapabilities;
//# sourceMappingURL=phoneNumberCapabilities.js.map