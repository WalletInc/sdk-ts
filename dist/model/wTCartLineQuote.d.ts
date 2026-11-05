import { WTAgeRestriction } from './wTAgeRestriction';
import { WTCartLineProblem } from './wTCartLineProblem';
import { WTMenuVenue } from './wTMenuVenue';
export declare class WTCartLineQuote extends null<String, any> {
    'itemID': any | null;
    'title': any | null;
    'quantity': any | null;
    'unitAmountCents': any | null;
    'options'?: any | null;
    'priceChanged'?: any | null;
    'lineTotalCents': any | null;
    'taxCents'?: any | null;
    'note'?: any | null;
    'ageRestriction': WTAgeRestriction;
    'idCheckOnHandoff': any | null;
    'venue'?: WTMenuVenue;
    'problem'?: WTCartLineProblem;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
