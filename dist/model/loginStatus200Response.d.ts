export declare class LoginStatus200Response {
    'message': any | null;
    'code': any | null;
    'status': LoginStatus200Response.StatusEnum;
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
export declare namespace LoginStatus200Response {
    enum StatusEnum {
        Valid
    }
}
