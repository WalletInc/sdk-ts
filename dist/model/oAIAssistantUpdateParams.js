"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAIAssistantUpdateParams = void 0;
class OAIAssistantUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OAIAssistantUpdateParams.attributeTypeMap);
    }
}
exports.OAIAssistantUpdateParams = OAIAssistantUpdateParams;
OAIAssistantUpdateParams.discriminator = undefined;
OAIAssistantUpdateParams.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
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
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "string"
    },
    {
        "name": "temperature",
        "baseName": "temperature",
        "type": "string"
    },
    {
        "name": "topP",
        "baseName": "topP",
        "type": "string"
    },
    {
        "name": "responseFormat",
        "baseName": "responseFormat",
        "type": "string"
    }
];
//# sourceMappingURL=oAIAssistantUpdateParams.js.map