"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Announcement {
    static getAttributeTypeMap() {
        return Announcement.attributeTypeMap;
    }
}
Announcement.discriminator = undefined;
Announcement.attributeTypeMap = [
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
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "severity",
        "baseName": "severity",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.Announcement = Announcement;
//# sourceMappingURL=announcement.js.map