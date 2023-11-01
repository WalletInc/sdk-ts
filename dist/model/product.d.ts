import { Plan } from './plan';
export declare class Product {
    'id': string;
    'title': string;
    'titleFull': string;
    'category': string;
    'iconName': string;
    'description': string;
    'plans': Array<Plan>;
    'isHourly'?: boolean;
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
