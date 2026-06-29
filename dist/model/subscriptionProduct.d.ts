export declare class SubscriptionProduct extends null<String, any> {
    'id': any | null;
    'title': any | null;
    'titleFull': any | null;
    'category': any | null;
    'volume'?: any | null;
    'value'?: any | null;
    'features': any | null;
    'pages': any | null;
    'iconName': any | null;
    'description': any | null;
    'isHourly'?: any | null;
    'releaseStatus'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
