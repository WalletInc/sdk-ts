import { VSCampaignGeneratedMessage } from './vSCampaignGeneratedMessage';
export declare class VSCampaignGeneratedMessagePagination {
    'results': Array<VSCampaignGeneratedMessage>;
    'length': number;
    'total': number;
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
