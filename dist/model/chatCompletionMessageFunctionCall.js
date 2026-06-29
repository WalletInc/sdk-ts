"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionMessageFunctionCall = void 0;
class ChatCompletionMessageFunctionCall {
    static getAttributeTypeMap() {
        return ChatCompletionMessageFunctionCall.attributeTypeMap;
    }
}
exports.ChatCompletionMessageFunctionCall = ChatCompletionMessageFunctionCall;
ChatCompletionMessageFunctionCall.discriminator = undefined;
ChatCompletionMessageFunctionCall.attributeTypeMap = [
    {
        "name": "arguments",
        "baseName": "arguments",
        "type": "any"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    }
];
//# sourceMappingURL=chatCompletionMessageFunctionCall.js.map