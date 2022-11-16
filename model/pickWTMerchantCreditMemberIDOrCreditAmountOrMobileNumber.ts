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

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber {
    /**
    * MerchantCredit ID as represented by the merchant
    */
    'memberID'?: string;
    'mobileNumber': string;
    /**
    * The amount that needs to be credited to the member
    */
    'creditAmount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber.attributeTypeMap;
    }
}

