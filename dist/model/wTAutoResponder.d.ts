export declare class WTAutoResponder extends null<String, any> {
    'id': string;
    'phoneNumberID': string;
    'keyword': any | null;
    'keywordCanonical': any | null;
    'responseBody': any | null;
    'mediaURLs': any | null;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
