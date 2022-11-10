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
import { WTWalletPageViewCount } from './wTWalletPageViewCount';

export class WTWalletObjectPrefixCounts {
    'walletObjectPrefix': string;
    'walletObjectName': string;
    'list': Array<WTWalletPageViewCount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "walletObjectPrefix",
            "baseName": "walletObjectPrefix",
            "type": "string"
        },
        {
            "name": "walletObjectName",
            "baseName": "walletObjectName",
            "type": "string"
        },
        {
            "name": "list",
            "baseName": "list",
            "type": "Array<WTWalletPageViewCount>"
        }    ];

    static getAttributeTypeMap() {
        return WTWalletObjectPrefixCounts.attributeTypeMap;
    }
}

