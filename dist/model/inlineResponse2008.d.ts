import { OptInListSubscriber } from './optInListSubscriber';
export declare class InlineResponse2008 {
    'total': number;
    'length': number;
    'results': Array<OptInListSubscriber>;
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
