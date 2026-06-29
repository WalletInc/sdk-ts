"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionMessage = void 0;
class ChatCompletionMessage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChatCompletionMessage.attributeTypeMap);
    }
}
exports.ChatCompletionMessage = ChatCompletionMessage;
ChatCompletionMessage.discriminator = undefined;
ChatCompletionMessage.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "any"
    },
    {
        "name": "refusal",
        "baseName": "refusal",
        "type": "any"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "ChatCompletionMessage.RoleEnum"
    },
    {
        "name": "audio",
        "baseName": "audio",
        "type": "ChatCompletionMessageAudio"
    },
    {
        "name": "functionCall",
        "baseName": "function_call",
        "type": "ChatCompletionMessageFunctionCall"
    },
    {
        "name": "toolCalls",
        "baseName": "tool_calls",
        "type": "any"
    }
];
(function (ChatCompletionMessage) {
    let RoleEnum;
    (function (RoleEnum) {
        RoleEnum[RoleEnum["Assistant"] = 'assistant'] = "Assistant";
    })(RoleEnum = ChatCompletionMessage.RoleEnum || (ChatCompletionMessage.RoleEnum = {}));
})(ChatCompletionMessage = exports.ChatCompletionMessage || (exports.ChatCompletionMessage = {}));
//# sourceMappingURL=chatCompletionMessage.js.map