export declare class HelpDeskRequest {
    'merchantPhoneNumberID': string;
    'cellPhone': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'employeeID': string;
    'isResolved': boolean;
    'resolvedAt'?: Date;
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
