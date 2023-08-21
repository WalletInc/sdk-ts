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

export class WTPerformanceCreateParams {
    'title': string;
    'body': string;
    'startDateTime': Date;
    'price': string;
    'url': string;
    /**
    * Stores the order number
    */
    'orderNumber': number;
    /**
    * Denotes if the event has been sold out
    */
    'isSoldOut': boolean;
    'mediaURL'?: string;
    'paymentDesignID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "isSoldOut",
            "baseName": "isSoldOut",
            "type": "boolean"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
        {
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTPerformanceCreateParams.attributeTypeMap;
    }
}

