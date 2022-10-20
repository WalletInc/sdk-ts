import { Feature } from './feature';
export declare class Plan {
    'name': string;
    'price': string;
    'features': Array<Feature>;
    'measurement'?: string;
    'isExceeded'?: boolean;
    'isCurrent'?: boolean;
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
