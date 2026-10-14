import { WTCustomDomainError } from './wTCustomDomainError';
import { WTCustomDomainState } from './wTCustomDomainState';
import { WTCustomDomainTXT } from './wTCustomDomainTXT';
export declare class WTCustomDomain extends null<String, any> {
    'hostname': any | null;
    'state'?: WTCustomDomainState;
    'managed': any | null;
    'dnsTarget': any | null;
    'txt'?: WTCustomDomainTXT;
    'error'?: WTCustomDomainError;
    'paused'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
