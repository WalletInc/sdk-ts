import { AmenityId } from './amenityId';
export declare class NewsArticle extends null<String, any> {
    'title': any | null;
    'orderNumber': any | null;
    'body': any | null;
    'url': any | null;
    'mediaURL'?: any | null;
    'publishedDate'?: any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
