"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Message.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
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
        "type": "any"
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
    }
];
//# sourceMappingURL=message.js.map