import { WTAutoResponderHitOutcome } from './wTAutoResponderHitOutcome';
export declare class WTAutoResponderHit extends null<String, any> {
    'id': string;
    'autoResponderID': string;
    'keyword': any | null;
    'consumerPhone': any | null;
    'inboundMessageID': any | null;
    'outboundMessageID': any | null;
    'outcome': WTAutoResponderHitOutcome;
    'outcomeDetail': any | null;
    'messageStatus'?: any | null;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
