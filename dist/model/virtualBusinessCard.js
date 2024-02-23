"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualBusinessCard = void 0;
class VirtualBusinessCard {
    static getAttributeTypeMap() {
        return VirtualBusinessCard.attributeTypeMap;
    }
}
exports.VirtualBusinessCard = VirtualBusinessCard;
VirtualBusinessCard.discriminator = undefined;
VirtualBusinessCard.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "designation",
        "baseName": "designation",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "introduction",
        "baseName": "introduction",
        "type": "string"
    },
    {
        "name": "instagram",
        "baseName": "instagram",
        "type": "string"
    },
    {
        "name": "facebook",
        "baseName": "facebook",
        "type": "string"
    },
    {
        "name": "youTube",
        "baseName": "youTube",
        "type": "string"
    },
    {
        "name": "twitter",
        "baseName": "twitter",
        "type": "string"
    },
    {
        "name": "linkedIn",
        "baseName": "linkedIn",
        "type": "string"
    },
    {
        "name": "whatsApp",
        "baseName": "whatsApp",
        "type": "string"
    },
    {
        "name": "avatarURL",
        "baseName": "avatarURL",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=virtualBusinessCard.js.map