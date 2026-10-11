export declare class WTQuietHoursStatus extends null<String, any> {
    'mode': any | null;
    'appliesTo': any | null;
    'referenceZone': any | null;
    'bandStartMin': any | null;
    'bandEndMin': any | null;
    'evaluatedAt': any | null;
    'withinBand': any | null;
    'wouldReject': any | null;
    'windowOpensAt': any | null;
    'windowClosesAt': any | null;
    'nextTransitionAt': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
