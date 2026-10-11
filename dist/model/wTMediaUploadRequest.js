"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMediaUploadRequest = void 0;
class WTMediaUploadRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMediaUploadRequest.attributeTypeMap);
    }
}
exports.WTMediaUploadRequest = WTMediaUploadRequest;
WTMediaUploadRequest.discriminator = undefined;
WTMediaUploadRequest.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "any"
    },
    {
        "name": "fileSize",
        "baseName": "fileSize",
        "type": "any"
    },
    {
        "name": "folder",
        "baseName": "folder",
        "type": "any"
    }
];
//# sourceMappingURL=wTMediaUploadRequest.js.map