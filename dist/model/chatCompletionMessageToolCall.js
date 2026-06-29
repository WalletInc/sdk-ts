"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionMessageToolCall = void 0;
class ChatCompletionMessageToolCall extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChatCompletionMessageToolCall.attributeTypeMap);
    }
}
exports.ChatCompletionMessageToolCall = ChatCompletionMessageToolCall;
ChatCompletionMessageToolCall.discriminator = undefined;
ChatCompletionMessageToolCall.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "_function",
        "baseName": "function",
        "type": "ChatCompletionMessageToolCallFunction"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ChatCompletionMessageToolCall.TypeEnum"
    }
];
(function (ChatCompletionMessageToolCall) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Function"] = 'function'] = "Function";
    })(TypeEnum = ChatCompletionMessageToolCall.TypeEnum || (ChatCompletionMessageToolCall.TypeEnum = {}));
})(ChatCompletionMessageToolCall = exports.ChatCompletionMessageToolCall || (exports.ChatCompletionMessageToolCall = {}));
//# sourceMappingURL=chatCompletionMessageToolCall.js.map