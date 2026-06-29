"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assistant = void 0;
class Assistant extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Assistant.attributeTypeMap);
    }
}
exports.Assistant = Assistant;
Assistant.discriminator = undefined;
Assistant.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "instructions",
        "baseName": "instructions",
        "type": "any"
    },
    {
        "name": "tools",
        "baseName": "tools",
        "type": "any"
    },
    {
        "name": "toolResources",
        "baseName": "toolResources",
        "type": "any"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any"
    },
    {
        "name": "temperature",
        "baseName": "temperature",
        "type": "any"
    },
    {
        "name": "topP",
        "baseName": "topP",
        "type": "any"
    },
    {
        "name": "responseFormat",
        "baseName": "responseFormat",
        "type": "any"
    },
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
        "name": "assistantID",
        "baseName": "assistantID",
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
    }
];
//# sourceMappingURL=assistant.js.map