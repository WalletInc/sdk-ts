import { WTPrizeGamePlayResultOutcome } from './wTPrizeGamePlayResultOutcome';
import { WTPrizeGamePlayResultPrize } from './wTPrizeGamePlayResultPrize';
export declare class WTPrizeGamePlayResult extends null<String, any> {
    'outcome': WTPrizeGamePlayResultOutcome;
    'playsRemaining': any | null;
    'oddsDisclosure': any | null;
    'prize'?: WTPrizeGamePlayResultPrize;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
