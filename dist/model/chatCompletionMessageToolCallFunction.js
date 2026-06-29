"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCompletionMessageToolCallFunction = void 0;
class ChatCompletionMessageToolCallFunction extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChatCompletionMessageToolCallFunction.attributeTypeMap);
    }
}
exports.ChatCompletionMessageToolCallFunction = ChatCompletionMessageToolCallFunction;
ChatCompletionMessageToolCallFunction.discriminator = undefined;
ChatCompletionMessageToolCallFunction.attributeTypeMap = [
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
//# sourceMappingURL=chatCompletionMessageToolCallFunction.js.map