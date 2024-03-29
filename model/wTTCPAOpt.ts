/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WTTCPAOptListID } from './wTTCPAOptListID';
import { WTTCPAOptSourceID } from './wTTCPAOptSourceID';

export class WTTCPAOpt {
    'listID': WTTCPAOptListID;
    'sourceID': WTTCPAOptSourceID;
    'phoneNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listID",
            "baseName": "listID",
            "type": "WTTCPAOptListID"
        },
        {
            "name": "sourceID",
            "baseName": "sourceID",
            "type": "WTTCPAOptSourceID"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTTCPAOpt.attributeTypeMap;
    }
}

