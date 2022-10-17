export declare class WTEmployeeCreate {
    'firstName': string;
    'lastName': string;
    'email': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'employeeID': string;
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
