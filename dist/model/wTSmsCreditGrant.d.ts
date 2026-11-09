export declare class WTSmsCreditGrant extends null<String, any> {
    'id': any | null;
    'merchantID': string;
    'segments': any | null;
    'source': any | null;
    'note'?: any | null;
    'reference'?: any | null;
    'grantedBy': any | null;
    'createdAt': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
