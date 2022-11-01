/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ModuleError {
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "stack",
            "baseName": "stack",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "#id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "#createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "#updatedAt",
            "type": "Date"
        },
        {
            "name": "module",
            "baseName": "#module",
            "type": "string"
        },
        {
            "name": "moduleName",
            "baseName": "#moduleName",
            "type": "string"
        },
        {
            "name": "moduleID",
            "baseName": "#moduleID",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "methodType",
            "baseName": "#methodType",
            "type": "string"
        },
        {
            "name": "stackTrace",
            "baseName": "#stackTrace",
            "type": "any"
        },
        {
            "name": "exception",
            "baseName": "#exception",
            "type": "any"
        },
        {
            "name": "microserviceURL",
            "baseName": "#microserviceURL",
            "type": "string"
        },
        {
            "name": "microserviceData",
            "baseName": "#microserviceData",
            "type": "any"
        },
        {
            "name": "microserviceMethod",
            "baseName": "#microserviceMethod",
            "type": "string"
        },
        {
            "name": "microserviceOptions",
            "baseName": "#microserviceOptions",
            "type": "any"
        },
        {
            "name": "microserviceResponseCode",
            "baseName": "#microserviceResponseCode",
            "type": "string"
        },
        {
            "name": "microserviceResponseMessage",
            "baseName": "#microserviceResponseMessage",
            "type": "string"
        },
        {
            "name": "microserviceResponseHTTPStatus",
            "baseName": "#microserviceResponseHTTPStatus",
            "type": "string"
        },
        {
            "name": "microserviceResponseFields",
            "baseName": "#microserviceResponseFields",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return ModuleError.attributeTypeMap;
    }
}

