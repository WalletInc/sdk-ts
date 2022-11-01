/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
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
export class PickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount {
    'optInListID': string;
    'optInSourceID': string | null;
    'isSubscribed': boolean;
    'isPendingAge21Verification': boolean;
    'mobilePhoneNumber': string;
    'referringURL': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "optInListID",
            "baseName": "optInListID",
            "type": "string"
        },
        {
            "name": "optInSourceID",
            "baseName": "optInSourceID",
            "type": "string"
        },
        {
            "name": "isSubscribed",
            "baseName": "isSubscribed",
            "type": "boolean"
        },
        {
            "name": "isPendingAge21Verification",
            "baseName": "isPendingAge21Verification",
            "type": "boolean"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobilePhoneNumber",
            "type": "string"
        },
        {
            "name": "referringURL",
            "baseName": "referringURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount.attributeTypeMap;
    }
}

