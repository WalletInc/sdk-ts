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

export class WTMerchantCreditCreationParams {
    'mobileNumber': string;
    /**
    * The amount that needs to be credited to the member
    */
    'creditAmount': number;
    /**
    * MerchantCredit ID as represented by the merchant
    */
    'memberID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return WTMerchantCreditCreationParams.attributeTypeMap;
    }
}

