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

export class WTAuthenticationLoginRequest {
    'username': string;
    'password': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTAuthenticationLoginRequest.attributeTypeMap;
    }
}

