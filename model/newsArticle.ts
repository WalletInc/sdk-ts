/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.533
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class NewsArticle {
    'title': string;
    'orderNumber': number;
    'body': string;
    'url': string;
    'mediaURL'?: string;
    'publishedDate'?: Date;
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
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
        {
            "name": "publishedDate",
            "baseName": "publishedDate",
            "type": "Date"
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
        return NewsArticle.attributeTypeMap;
    }
}

