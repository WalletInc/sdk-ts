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

export class WTSystemRoleCreate {
    'displayName': string;
    'webpagesToAdd': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "webpagesToAdd",
            "baseName": "webpagesToAdd",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WTSystemRoleCreate.attributeTypeMap;
    }
}

