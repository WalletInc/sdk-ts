import { Employee } from './employee';
export declare class Message {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'toEmployee'?: Employee;
    'fromEmployee'?: Employee;
    'isRead': boolean;
    'subject': string;
    'body': string;
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
