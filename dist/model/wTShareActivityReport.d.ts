import { WTShareActivityRow } from './wTShareActivityRow';
export declare class WTShareActivityReport extends null<String, any> {
    'merchantID': string;
    'windowDays': any | null;
    'rows': any | null;
    'totals': WTShareActivityRow;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
