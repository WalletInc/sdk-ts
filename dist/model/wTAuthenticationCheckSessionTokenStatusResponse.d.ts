export declare class WTAuthenticationCheckSessionTokenStatusResponse extends null<String, any> {
    'status': WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace WTAuthenticationCheckSessionTokenStatusResponse {
    enum StatusEnum {
        Valid
    }
}
