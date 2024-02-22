import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus';
export declare class PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone {
    'id': string;
    'employeeID': string;
    'status': PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'body': string;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'paymentObjectBroadcastID'?: PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID;
    'bodyTemplate': string;
    'statusCallback': string;
    'isSent': boolean;
    'sentAt'?: Date;
    'deliveredAt'?: Date;
    'messageSid': string;
    'numSegments'?: number;
    'numMedia'?: number;
    'errorCode'?: string | null;
    'errorMessage'?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
