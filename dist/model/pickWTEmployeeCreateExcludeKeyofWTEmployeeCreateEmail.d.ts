import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute';
export declare class PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail {
    'employeeID': string;
    'firstName': string;
    'lastName': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'jobTitle': string;
    'department': string;
    'scheduleStartDay'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay;
    'scheduleStartHour'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour;
    'scheduleStartMinute'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute;
    'scheduleStartMeridiem'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem;
    'scheduleEndDay'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay;
    'scheduleEndHour'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour;
    'scheduleEndMinute'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute;
    'scheduleEndMeridiem'?: PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem;
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
