"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRunOnThreadRequest = void 0;
class CreateRunOnThreadRequest {
    static getAttributeTypeMap() {
        return CreateRunOnThreadRequest.attributeTypeMap;
    }
}
exports.CreateRunOnThreadRequest = CreateRunOnThreadRequest;
CreateRunOnThreadRequest.discriminator = undefined;
CreateRunOnThreadRequest.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "assistantID",
        "baseName": "assistantID",
        "type": "string"
    }
];
//# sourceMappingURL=createRunOnThreadRequest.js.map