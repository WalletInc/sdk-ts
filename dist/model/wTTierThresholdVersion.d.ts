import { WTTierThresholdVersionKind } from './wTTierThresholdVersionKind';
export declare class WTTierThresholdVersion extends null<String, any> {
    'versionID': string;
    'previousQualifyPoints': any | null;
    'qualifyPoints': any | null;
    'kind': WTTierThresholdVersionKind;
    'upgradedAtSave': number;
    'employeeName': any | null;
    'createdAt': Date;
    'undoneAt': any | null;
    'canUndo': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
