export declare class PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail {
    'employeeID': string;
    'firstName': string;
    'lastName': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'jobTitle': string;
    'department': string;
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
