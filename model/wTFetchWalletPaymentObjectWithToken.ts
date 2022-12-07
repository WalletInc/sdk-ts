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

export class WTFetchWalletPaymentObjectWithToken {
    'phoneVerificationToken': string;
    'merchantID': string;
    'pageType': string;
    'isRefresh'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneVerificationToken",
            "baseName": "phoneVerificationToken",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "pageType",
            "baseName": "pageType",
            "type": "string"
        },
        {
            "name": "isRefresh",
            "baseName": "isRefresh",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WTFetchWalletPaymentObjectWithToken.attributeTypeMap;
    }
}

