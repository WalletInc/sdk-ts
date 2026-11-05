import { WTAgeRestriction } from './wTAgeRestriction';
import { WTMenuVenue } from './wTMenuVenue';
import { WTWalletOrdering } from './wTWalletOrdering';
export declare class WTCartQuote extends null<String, any> {
    'merchantID': any | null;
    'currency': any | null;
    'venue'?: WTMenuVenue;
    'lines': any | null;
    'subtotalCents': any | null;
    'taxCents': any | null;
    'totalCents': any | null;
    'ordering'?: WTWalletOrdering;
    'ageRequirement': WTAgeRestriction;
    'idCheckRequired': any | null;
    'isValid': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
