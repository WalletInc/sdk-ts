"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualBusinessCard = void 0;
class VirtualBusinessCard extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VirtualBusinessCard.attributeTypeMap);
    }
}
exports.VirtualBusinessCard = VirtualBusinessCard;
VirtualBusinessCard.discriminator = undefined;
VirtualBusinessCard.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "any"
    },
    {
        "name": "designation",
        "baseName": "designation",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "introduction",
        "baseName": "introduction",
        "type": "any"
    },
    {
        "name": "instagram",
        "baseName": "instagram",
        "type": "any"
    },
    {
        "name": "facebook",
        "baseName": "facebook",
        "type": "any"
    },
    {
        "name": "youTube",
        "baseName": "youTube",
        "type": "any"
    },
    {
        "name": "twitter",
        "baseName": "twitter",
        "type": "any"
    },
    {
        "name": "linkedIn",
        "baseName": "linkedIn",
        "type": "any"
    },
    {
        "name": "whatsApp",
        "baseName": "whatsApp",
        "type": "any"
    },
    {
        "name": "avatarURL",
        "baseName": "avatarURL",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=virtualBusinessCard.js.map