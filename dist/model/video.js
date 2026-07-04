"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
class Video extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Video.attributeTypeMap);
    }
}
exports.Video = Video;
Video.discriminator = undefined;
Video.attributeTypeMap = [
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
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
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
    },
    {
        "name": "provider",
        "baseName": "provider",
        "type": "VideoProvider"
    },
    {
        "name": "assetId",
        "baseName": "assetId",
        "type": "any"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "WTVideoPlaybackSource"
    }
];
//# sourceMappingURL=video.js.map