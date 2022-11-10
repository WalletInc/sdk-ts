/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.520
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTAuthenticationCheckSessionTokenStatusResponse {
    'status': WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return WTAuthenticationCheckSessionTokenStatusResponse.attributeTypeMap;
    }
}

export namespace WTAuthenticationCheckSessionTokenStatusResponse {
    export enum StatusEnum {
        Valid = <any> 'Valid'
    }
}
