/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.528
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Alert {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'title': string;
    'message': string;
    'isRead': boolean;
    's3Bucket': string;
    's3Key': string;
    'fileSizeBytes': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "isRead",
            "baseName": "isRead",
            "type": "boolean"
        },
        {
            "name": "s3Bucket",
            "baseName": "s3Bucket",
            "type": "string"
        },
        {
            "name": "s3Key",
            "baseName": "s3Key",
            "type": "string"
        },
        {
            "name": "fileSizeBytes",
            "baseName": "fileSizeBytes",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Alert.attributeTypeMap;
    }
}

