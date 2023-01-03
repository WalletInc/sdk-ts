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

export class StaticVoucherCampaignUpdate {
    'startDateTime': Date;
    'expirationDateTime': Date;
    'title': string;
    'notes': string;
    'valueType': string | null;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date"
        },
        {
            "name": "expirationDateTime",
            "baseName": "expirationDateTime",
            "type": "Date"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "displayValue",
            "baseName": "displayValue",
            "type": "string"
        },
        {
            "name": "merchantsReferenceID",
            "baseName": "merchantsReferenceID",
            "type": "string"
        },
        {
            "name": "validOnlyAtPOSRegisterIDs",
            "baseName": "validOnlyAtPOSRegisterIDs",
            "type": "Array<string>"
        },
        {
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StaticVoucherCampaignUpdate.attributeTypeMap;
    }
}

