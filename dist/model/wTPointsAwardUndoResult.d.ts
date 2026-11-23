import { WTPointsAwardUndoResultTierReverted } from './wTPointsAwardUndoResultTierReverted';
export declare class WTPointsAwardUndoResult extends null<String, any> {
    'pointsReversed': number;
    'balance': number;
    'tierReverted': WTPointsAwardUndoResultTierReverted;
    'replayed': boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
