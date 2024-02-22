import { EmployeeScheduleStartDay } from './employeeScheduleStartDay';
import { EmployeeScheduleStartHour } from './employeeScheduleStartHour';
import { EmployeeScheduleStartMeridiem } from './employeeScheduleStartMeridiem';
import { EmployeeScheduleStartMinute } from './employeeScheduleStartMinute';
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
    'scheduleStartDay'?: EmployeeScheduleStartDay;
    'scheduleStartHour'?: EmployeeScheduleStartHour;
    'scheduleStartMinute'?: EmployeeScheduleStartMinute;
    'scheduleStartMeridiem'?: EmployeeScheduleStartMeridiem;
    'scheduleEndDay'?: EmployeeScheduleStartDay;
    'scheduleEndHour'?: EmployeeScheduleStartHour;
    'scheduleEndMinute'?: EmployeeScheduleStartMinute;
    'scheduleEndMeridiem'?: EmployeeScheduleStartMeridiem;
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
