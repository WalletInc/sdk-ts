export declare class Product extends null<String, any> {
    'id': string;
    'title': string;
    'titleFull': string;
    'category': string;
    'iconName': string;
    'description': string;
    'plans': any | null;
    'isHourly'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
