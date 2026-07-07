import { WTBillingChangePlanBillingCadence } from './wTBillingChangePlanBillingCadence';
export declare class WTBillingChangePlan extends null<String, any> {
    'planName': any | null;
    'billingCadence'?: WTBillingChangePlanBillingCadence;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
