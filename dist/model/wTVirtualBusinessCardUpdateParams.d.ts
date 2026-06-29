export declare class WTVirtualBusinessCardUpdateParams extends null<String, any> {
    'firstName': string;
    'lastName': string;
    'emailAddress': any | null;
    'designation': any | null;
    'phoneNumber': any | null;
    'introduction'?: any | null;
    'instagram'?: any | null;
    'facebook'?: any | null;
    'youTube'?: any | null;
    'twitter'?: any | null;
    'linkedIn'?: any | null;
    'whatsApp'?: any | null;
    'avatarURL'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
