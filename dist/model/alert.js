"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
class Alert {
    static getAttributeTypeMap() {
        return Alert.attributeTypeMap;
    }
}
exports.Alert = Alert;
Alert.discriminator = undefined;
Alert.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
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
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "isRead",
        "baseName": "isRead",
        "type": "boolean"
    },
    {
        "name": "s3Bucket",
        "baseName": "s3Bucket",
        "type": "string"
    },
    {
        "name": "s3Key",
        "baseName": "s3Key",
        "type": "string"
    },
    {
        "name": "fileSizeBytes",
        "baseName": "fileSizeBytes",
        "type": "number"
    }
];
//# sourceMappingURL=alert.js.map