import { WTMemberUpdateRevertRefusalReason } from './wTMemberUpdateRevertRefusalReason';
export declare class WTMemberUpdateRevertRefusal extends null<String, any> {
    'memberID': string;
    'memberIdentifier'?: string;
    'reason': WTMemberUpdateRevertRefusalReason;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
