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
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "string"
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
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "any"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "any"
    },
    {
        "name": "orientation",
        "baseName": "orientation",
        "type": "WTVideoOrientation"
    },
    {
        "name": "durationSeconds",
        "baseName": "durationSeconds",
        "type": "any"
    },
    {
        "name": "posterURL",
        "baseName": "posterURL",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTVideoStatus"
    }
];
//# sourceMappingURL=video.js.map