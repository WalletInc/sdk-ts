export declare class WTAuthenticationCheckSessionTokenStatusResponse {
    'status': WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum;
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
export declare namespace WTAuthenticationCheckSessionTokenStatusResponse {
    enum StatusEnum {
        Valid
    }
}
