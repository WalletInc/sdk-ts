/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.527
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
export class PickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID {
    'listName': string;
    'phoneNumberID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listName",
            "baseName": "listName",
            "type": "string"
        },
        {
            "name": "phoneNumberID",
            "baseName": "phoneNumberID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID.attributeTypeMap;
    }
}

