import { ChatCompletionMessageToolCallFunction } from './chatCompletionMessageToolCallFunction';
export declare class ChatCompletionMessageToolCall extends null<String, any> {
    'id': any | null;
    '_function': ChatCompletionMessageToolCallFunction;
    'type': ChatCompletionMessageToolCall.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace ChatCompletionMessageToolCall {
    enum TypeEnum {
        Function
    }
}
