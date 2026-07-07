import { WTPrizeGamePlayLimitPeriod } from './wTPrizeGamePlayLimitPeriod';
import { WTPrizeGameTrigger } from './wTPrizeGameTrigger';
import { WTPrizeGameType } from './wTPrizeGameType';
export declare class WTPrizePromotion extends null<String, any> {
    'gameType': WTPrizeGameType;
    'title': any | null;
    'winOdds': any | null;
    'prizeTiers': any | null;
    'perGuestPlayLimit': any | null;
    'playLimitPeriod': WTPrizeGamePlayLimitPeriod;
    'startDate': any | null;
    'endDate': any | null;
    'triggerType': WTPrizeGameTrigger;
    'minimumAge'?: any | null;
    'registrationAttested'?: any | null;
    'id': any | null;
    'merchantID': any | null;
    'isActive': any | null;
    'totalPrizePoolValue': any | null;
    'oddsDisclosure': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
