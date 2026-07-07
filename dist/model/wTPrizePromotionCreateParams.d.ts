import { WTPrizeGamePlayLimitPeriod } from './wTPrizeGamePlayLimitPeriod';
import { WTPrizeGameTrigger } from './wTPrizeGameTrigger';
import { WTPrizeGameType } from './wTPrizeGameType';
export declare class WTPrizePromotionCreateParams extends null<String, any> {
    'gameType': WTPrizeGameType;
    'title': any | null;
    'winOdds': any | null;
    'prizeTiers': any | null;
    'perGuestPlayLimit': number;
    'playLimitPeriod': WTPrizeGamePlayLimitPeriod;
    'startDate': Date;
    'endDate': Date;
    'triggerType': WTPrizeGameTrigger;
    'minimumAge'?: any | null;
    'registrationAttested'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
