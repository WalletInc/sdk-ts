import { ChatCompletionMessageAudio } from './chatCompletionMessageAudio';
import { ChatCompletionMessageFunctionCall } from './chatCompletionMessageFunctionCall';
export declare class ChatCompletionMessage extends null<String, any> {
    'content': any | null;
    'refusal': any | null;
    'role': ChatCompletionMessage.RoleEnum;
    'audio'?: ChatCompletionMessageAudio;
    'functionCall'?: ChatCompletionMessageFunctionCall;
    'toolCalls'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace ChatCompletionMessage {
    enum RoleEnum {
        Assistant
    }
}
