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

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier {
    'id': string;
    'merchantID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * The timestamp of when this resource was updated
    */
    'updatedAt': Date;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;
    'mobileNumber': string;
    /**
    * The amount that needs to be credited to the member
    */
    'creditAmount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
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
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
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
        return PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier.attributeTypeMap;
    }
}
