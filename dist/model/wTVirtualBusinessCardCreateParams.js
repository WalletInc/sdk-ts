"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVirtualBusinessCardCreateParams = void 0;
class WTVirtualBusinessCardCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVirtualBusinessCardCreateParams.attributeTypeMap);
    }
}
exports.WTVirtualBusinessCardCreateParams = WTVirtualBusinessCardCreateParams;
WTVirtualBusinessCardCreateParams.discriminator = undefined;
WTVirtualBusinessCardCreateParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTVirtualBusinessCardCreateParams.js.map