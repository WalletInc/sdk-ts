/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.518
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTMerchantCredit {
    'id': string;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;
    'merchantID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * The timestamp of when this resource was updated
    */
    'updatedAt': Date;
    'mobileNumber': string;
    /**
    * The amount that needs to be credited to the member
    */
    'creditAmount': number;
    /**
    * MerchantCredit ID as represented by the merchant
    */
    'memberID'?: string;
    /**
    * The amount that needs to be credited to the member (fixed to 2 decimals)
    */
    'creditAmountDecimal': string;
    /**
    * The amount that needs to be credited to the member (in string)
    */
    'creditAmountString': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
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
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "creditAmount",
            "baseName": "creditAmount",
            "type": "number"
        },
        {
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
        },
        {
            "name": "creditAmountDecimal",
            "baseName": "creditAmount_decimal",
            "type": "string"
        },
        {
            "name": "creditAmountString",
            "baseName": "creditAmount_string",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTMerchantCredit.attributeTypeMap;
    }
}

