import { EmployeeScheduleStartDay } from './employeeScheduleStartDay';
import { EmployeeScheduleStartHour } from './employeeScheduleStartHour';
import { EmployeeScheduleStartMeridiem } from './employeeScheduleStartMeridiem';
import { EmployeeScheduleStartMinute } from './employeeScheduleStartMinute';
export declare class WTEmployeeUpdate extends null<String, any> {
    'employeeID': any | null;
    'firstName': any | null;
    'lastName': any | null;
    'phoneNumber': any | null;
    'isPublicRepresentative': any | null;
    'walletSequenceNumber': any | null;
    'jobTitle': any | null;
    'department': any | null;
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
    static getAttributeTypeMap(): any;
}
