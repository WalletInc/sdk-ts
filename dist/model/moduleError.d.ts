export declare class ModuleError {
    'name': string;
    'message': string;
    'stack'?: string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'module': string;
    'moduleName': string;
    'moduleID': string;
    'code': string;
    'methodType': string;
    'stackTrace': any | null;
    'exception': any | null;
    'microserviceURL': string;
    'microserviceData': any | null;
    'microserviceMethod': string;
    'microserviceOptions': any | null;
    'microserviceResponseCode': string;
    'microserviceResponseMessage': string;
    'microserviceResponseHTTPStatus': string;
    'microserviceResponseFields': any | null;
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
