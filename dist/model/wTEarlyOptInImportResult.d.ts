export declare class WTEarlyOptInImportResult extends null<String, any> {
    'isDryRun': any | null;
    'isRegistrationApproved': any | null;
    'optInListID'?: any | null;
    'phoneNumberID'?: any | null;
    'totalCount': any | null;
    'bringOverCount': any | null;
    'welcomeCount': any | null;
    'confirmationCount': any | null;
    'skippedCount': any | null;
    'skipped': any | null;
    'notEligibleCount': any | null;
    'isOptOutChecked': any | null;
    'textsScheduledAt'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
