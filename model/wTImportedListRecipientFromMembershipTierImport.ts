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

export class WTImportedListRecipientFromMembershipTierImport {
    'listName': string;
    'phoneNumberID': string;
    'tierID': string | null;

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
        },
        {
            "name": "tierID",
            "baseName": "tierID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTImportedListRecipientFromMembershipTierImport.attributeTypeMap;
    }
}

