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
import { WTWalletPageViewId } from './wTWalletPageViewId';

export class WTStaticVoucherCreateParams {
    'offerAmountCents': number;
    'memberID'?: string;
    'cellPhone': string;
    'campaignID': WTWalletPageViewId;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "offerAmountCents",
            "baseName": "offerAmountCents",
            "type": "number"
        },
        {
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
        },
        {
            "name": "cellPhone",
            "baseName": "cellPhone",
            "type": "string"
        },
        {
            "name": "campaignID",
            "baseName": "campaignID",
            "type": "WTWalletPageViewId"
        }    ];

    static getAttributeTypeMap() {
        return WTStaticVoucherCreateParams.attributeTypeMap;
    }
}

