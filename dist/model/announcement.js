"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
class Announcement extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Announcement.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
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