import { AmenityId } from './amenityId';
import { OrderStatus } from './orderStatus';
import { WTAgeRestriction } from './wTAgeRestriction';
import { WTMenuVenueType } from './wTMenuVenueType';
export declare class Order extends null<String, any> {
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'memberID'?: any | null;
    'mobileNumber'?: any | null;
    'status': OrderStatus;
    'currency': any | null;
    'amountTotal': any | null;
    'stripeCheckoutSessionID'?: any | null;
    'stripePaymentIntentID'?: any | null;
    'stripeChargeID'?: any | null;
    'receiptURL'?: any | null;
    'acquisitionSource'?: any | null;
    'shareId'?: any | null;
    'donorNote'?: any | null;
    'ageRequirement'?: WTAgeRestriction;
    'idCheckRequired'?: any | null;
    'venueType'?: WTMenuVenueType;
    'venueID'?: any | null;
    'venueTitle'?: any | null;
    'lineItems': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
