export declare class Employee {
    'firstName': string;
    'lastName': string;
    'email': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'employeeID': string;
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
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'username': string;
    'emailVerified': string;
    'profilePictureURL': string;
    'merchantID': string;
    'sessionToken': string;
    'failedLoginAttempts'?: number;
    'lastLoginDate'?: Date;
    'cfuvid'?: string;
    'schedule'?: object;
    'isEmailNotificationDisabled'?: boolean;
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
