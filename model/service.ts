/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Service {
    'title': string;
    'description': string;
    'displayValue': string;
    'orderNumber': number;
    'mediaURL'?: string;
    'id': string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayValue",
            "baseName": "displayValue",
            "type": "string"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
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
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Service.attributeTypeMap;
    }
}

