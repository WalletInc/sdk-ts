import { WTPrizeGamePlayLimitPeriod } from './wTPrizeGamePlayLimitPeriod';
import { WTPrizeGameType } from './wTPrizeGameType';
export declare class WTPrizeGameActivePromotion extends null<String, any> {
    'active': any | null;
    'promotionID'?: any | null;
    'gameType'?: WTPrizeGameType;
    'sponsorName'?: any | null;
    'title'?: any | null;
    'oddsDisclosure'?: any | null;
    'minimumAge'?: any | null;
    'startDate'?: any | null;
    'endDate'?: any | null;
    'perGuestPlayLimit'?: any | null;
    'playLimitPeriod'?: WTPrizeGamePlayLimitPeriod;
    'prizes'?: any | null;
    'noPurchaseNecessary'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
