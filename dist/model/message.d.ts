import { Employee } from './employee';
export declare class Message extends null<String, any> {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'toEmployee'?: Employee;
    'fromEmployee'?: Employee;
    'isRead': any | null;
    'subject': any | null;
    'body': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
