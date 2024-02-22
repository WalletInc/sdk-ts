/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WTEmployeeS3FilePresignContext } from './wTEmployeeS3FilePresignContext';

export class WTEmployeeS3FilePresign {
    'fileName': string;
    'fileType': string;
    'context': WTEmployeeS3FilePresignContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "fileType",
            "baseName": "fileType",
            "type": "string"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "WTEmployeeS3FilePresignContext"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeS3FilePresign.attributeTypeMap;
    }
}

