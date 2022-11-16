/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class DuplicateRowFound {
    'name': string;
    'message': string;
    'stack'?: string;
    'httpErrorCode': number;
    'trackingCode': string;

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
            "name": "httpErrorCode",
            "baseName": "httpErrorCode",
            "type": "number"
        },
        {
            "name": "trackingCode",
            "baseName": "trackingCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DuplicateRowFound.attributeTypeMap;
    }
}

