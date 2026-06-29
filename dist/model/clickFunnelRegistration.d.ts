import { ClickFunnelContact } from './clickFunnelContact';
export declare class ClickFunnelRegistration extends null<String, any> {
    'contact': ClickFunnelContact;
    'event': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
