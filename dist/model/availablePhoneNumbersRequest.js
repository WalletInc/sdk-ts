"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailablePhoneNumbersRequest = void 0;
class AvailablePhoneNumbersRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AvailablePhoneNumbersRequest.attributeTypeMap);
    }
}
exports.AvailablePhoneNumbersRequest = AvailablePhoneNumbersRequest;
AvailablePhoneNumbersRequest.discriminator = undefined;
AvailablePhoneNumbersRequest.attributeTypeMap = [
    {
        "name": "areaCode",
        "baseName": "areaCode",
        "type": "any"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "any"
    }
];
//# sourceMappingURL=availablePhoneNumbersRequest.js.map