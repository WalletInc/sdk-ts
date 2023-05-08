"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailablePhoneNumbersRequest = void 0;
class AvailablePhoneNumbersRequest {
    static getAttributeTypeMap() {
        return AvailablePhoneNumbersRequest.attributeTypeMap;
    }
}
AvailablePhoneNumbersRequest.discriminator = undefined;
AvailablePhoneNumbersRequest.attributeTypeMap = [
    {
        "name": "areaCode",
        "baseName": "areaCode",
        "type": "number"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    }
];
exports.AvailablePhoneNumbersRequest = AvailablePhoneNumbersRequest;
//# sourceMappingURL=availablePhoneNumbersRequest.js.map