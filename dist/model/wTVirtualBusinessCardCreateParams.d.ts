export declare class WTVirtualBusinessCardCreateParams {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
    'designation': string;
    'phoneNumber': string;
    'introduction'?: string;
    'instagram'?: string;
    'facebook'?: string;
    'youTube'?: string;
    'twitter'?: string;
    'linkedIn'?: string;
    'whatsApp'?: string;
    'avatarURL'?: string;
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
