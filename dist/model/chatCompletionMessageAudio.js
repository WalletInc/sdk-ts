"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionMessageAudio = void 0;
class ChatCompletionMessageAudio {
    static getAttributeTypeMap() {
        return ChatCompletionMessageAudio.attributeTypeMap;
    }
}
exports.ChatCompletionMessageAudio = ChatCompletionMessageAudio;
ChatCompletionMessageAudio.discriminator = undefined;
ChatCompletionMessageAudio.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "any"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "any"
    },
    {
        "name": "transcript",
        "baseName": "transcript",
        "type": "any"
    }
];
//# sourceMappingURL=chatCompletionMessageAudio.js.map