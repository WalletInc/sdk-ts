import { OutboundSMSPaymentObjectBroadcastID } from './outboundSMSPaymentObjectBroadcastID';
import { OutboundSMSStatus } from './outboundSMSStatus';
import { StaticVoucherId } from './staticVoucherId';
export declare class OutboundSMS extends null<String, any> {
    'id': StaticVoucherId;
    'employeeID': string;
    'status': OutboundSMSStatus;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'body': any | null;
    'phoneNumberID': string;
    'mediaURLs': any | null;
    'paymentObjectBroadcastID'?: OutboundSMSPaymentObjectBroadcastID;
    'bodyTemplate': any | null;
    'statusCallback': any | null;
    'isSent': any | null;
    'sentAt'?: any | null;
    'deliveredAt'?: any | null;
    'messageSid': any | null;
    'numSegments'?: any | null;
    'numMedia'?: any | null;
    'errorCode'?: any | null;
    'errorMessage'?: any | null;
    'to': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
