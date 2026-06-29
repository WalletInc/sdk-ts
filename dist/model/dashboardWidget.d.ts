export declare class DashboardWidget extends null<String, any> {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'divID': string;
    'title': string;
    'subtitle': string;
    'cssClass': string;
    'icon': string;
    'route': string;
    'type': string;
    'orderNumber': number;
    'isDefault': boolean;
    'category': string;
    'categoryIcon': string;
    'categoryOrderNumber': number;
    'pageName': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
