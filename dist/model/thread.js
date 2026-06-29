"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
class Thread extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Thread.attributeTypeMap);
    }
}
exports.Thread = Thread;
Thread.discriminator = undefined;
Thread.attributeTypeMap = [
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
        "name": "threadID",
        "baseName": "threadID",
        "type": "any"
    }
];
//# sourceMappingURL=thread.js.map