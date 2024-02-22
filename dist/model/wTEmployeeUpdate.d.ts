import { EmployeeScheduleStartDay } from './employeeScheduleStartDay';
import { EmployeeScheduleStartHour } from './employeeScheduleStartHour';
import { EmployeeScheduleStartMeridiem } from './employeeScheduleStartMeridiem';
import { EmployeeScheduleStartMinute } from './employeeScheduleStartMinute';
export declare class WTEmployeeUpdate {
    'employeeID': string;
    'firstName': string;
    'lastName': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
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
