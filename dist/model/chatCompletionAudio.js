"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionAudio = void 0;
class ChatCompletionAudio extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChatCompletionAudio.attributeTypeMap);
    }
}
exports.ChatCompletionAudio = ChatCompletionAudio;
ChatCompletionAudio.discriminator = undefined;
ChatCompletionAudio.attributeTypeMap = [
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
//# sourceMappingURL=chatCompletionAudio.js.map