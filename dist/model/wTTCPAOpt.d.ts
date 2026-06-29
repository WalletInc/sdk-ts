import { WTTCPAOptListID } from './wTTCPAOptListID';
import { WTTCPAOptSourceID } from './wTTCPAOptSourceID';
export declare class WTTCPAOpt extends null<String, any> {
    'listID': WTTCPAOptListID;
    'sourceID': WTTCPAOptSourceID;
    'phoneNumber': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
