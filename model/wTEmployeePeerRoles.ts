/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTEmployeePeerRoles {
    'rolesArray'?: Array<any>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rolesArray",
            "baseName": "rolesArray",
            "type": "Array<any>"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeePeerRoles.attributeTypeMap;
    }
}

