import { WTSegmentAdvisory } from './wTSegmentAdvisory';
import { WTSegmentEstimateEncoding } from './wTSegmentEstimateEncoding';
export declare class WTSegmentEstimate extends null<String, any> {
    'encoding': WTSegmentEstimateEncoding;
    'characters': any | null;
    'textSegments': any | null;
    'units': any | null;
    'isMms': any | null;
    'nonGsmCharacters': any | null;
    'segmentsIfCleaned': any | null;
    'advisory': WTSegmentAdvisory;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
