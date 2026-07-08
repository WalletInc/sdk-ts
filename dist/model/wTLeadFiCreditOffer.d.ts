export declare class WTLeadFiCreditOffer extends null<String, any> {
    'name'?: any | null;
    'details'?: any | null;
    'status'?: any | null;
    'amount'?: any | null;
    'contingencies'?: any | null;
    'debtToIncome'?: any | null;
    'monthlyPayments'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
