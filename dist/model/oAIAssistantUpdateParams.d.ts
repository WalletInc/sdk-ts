export declare class OAIAssistantUpdateParams extends null<String, any> {
    'name': any | null;
    'description'?: string;
    'instructions': any | null;
    'tools'?: any | null;
    'toolResources'?: string;
    'metadata'?: string;
    'temperature': string;
    'topP': string;
    'responseFormat'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
