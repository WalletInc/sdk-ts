"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}
exports.Message = Message;
Message.discriminator = undefined;
Message.attributeTypeMap = [
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
        "name": "toEmployee",
        "baseName": "toEmployee",
        "type": "Employee"
    },
    {
        "name": "fromEmployee",
        "baseName": "fromEmployee",
        "type": "Employee"
    },
    {
        "name": "isRead",
        "baseName": "isRead",
        "type": "boolean"
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
    }
];
//# sourceMappingURL=message.js.map