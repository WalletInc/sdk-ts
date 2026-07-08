import { WTLeadFiConsumerProfileAddress } from './wTLeadFiConsumerProfileAddress';
import { WTLeadFiConsumerProfileAssets } from './wTLeadFiConsumerProfileAssets';
import { WTLeadFiConsumerProfileIncome } from './wTLeadFiConsumerProfileIncome';
export declare class WTLeadFiConsumerProfile extends null<String, any> {
    'age'?: any | null;
    'phones': any | null;
    'address'?: WTLeadFiConsumerProfileAddress;
    'income'?: WTLeadFiConsumerProfileIncome;
    'assets'?: WTLeadFiConsumerProfileAssets;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
