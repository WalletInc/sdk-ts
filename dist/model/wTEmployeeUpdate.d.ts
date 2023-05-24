export declare class WTEmployeeUpdate {
    'employeeID': string;
    'firstName': string;
    'lastName': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'jobTitle': string;
    'department': string;
    'scheduleStartDay'?: string | null;
    'scheduleStartHour'?: number | null;
    'scheduleStartMinute'?: number | null;
    'scheduleStartMeridiem'?: string | null;
    'scheduleEndDay'?: string | null;
    'scheduleEndHour'?: number | null;
    'scheduleEndMinute'?: number | null;
    'scheduleEndMeridiem'?: string | null;
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
