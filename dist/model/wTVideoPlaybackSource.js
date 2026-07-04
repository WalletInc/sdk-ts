"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoPlaybackSource = void 0;
class WTVideoPlaybackSource extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoPlaybackSource.attributeTypeMap);
    }
}
exports.WTVideoPlaybackSource = WTVideoPlaybackSource;
WTVideoPlaybackSource.discriminator = undefined;
WTVideoPlaybackSource.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "WTVideoPlaybackSourceType"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoPlaybackSource.js.map