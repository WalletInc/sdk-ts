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
import { ClickFunnelPurchase } from './clickFunnelPurchase';

export class ClickFunnelEvent {
    'purchase': ClickFunnelPurchase;
    'event': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "purchase",
            "baseName": "purchase",
            "type": "ClickFunnelPurchase"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClickFunnelEvent.attributeTypeMap;
    }
}

