"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
class Announcement {
    static getAttributeTypeMap() {
        return Announcement.attributeTypeMap;
    }
}
exports.Announcement = Announcement;
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
//# sourceMappingURL=announcement.js.map