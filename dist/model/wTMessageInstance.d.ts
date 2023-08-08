import { MessageDirection } from './messageDirection';
import { MessageStatus } from './messageStatus';
export declare class WTMessageInstance {
    'subresourceUris': object;
    'apiVersion': string;
    'priceUnit': string;
    'errorCode': number;
    'dateCreated': Date;
    'dateSent': Date;
    'sid': string;
    'messagingServiceSid': string;
    'status': MessageStatus;
    'numMedia': string;
    'accountSid': string;
    'uri': string;
    'errorMessage': string;
    'price': string;
    'dateUpdated': Date;
    'to': string;
    'from': string;
    'direction': MessageDirection;
    'numSegments': string;
    'body': string;
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
