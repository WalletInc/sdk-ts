export declare class ChatCompletionMessageAudio {
    'id': any | null;
    'data': any | null;
    'expiresAt': any | null;
    'transcript': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
