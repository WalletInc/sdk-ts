import { WTPointsSkipReason } from './wTPointsSkipReason';
export declare class WTPointsAwardResult extends null<String, any> {
    'skipped'?: WTPointsSkipReason;
    'entryID'?: string;
    'pointsAwarded'?: number;
    'balance'?: number;
    'lifetimeEarned'?: number;
    'earned12Months'?: number;
    'previousTierID'?: any | null;
    'newTierID'?: any | null;
    'tierChanged'?: boolean;
    'newTierName'?: any | null;
    'replayed'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace WTPointsAwardResult {
}
