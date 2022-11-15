/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.522
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { OutboundSMS } from './outboundSMS';

export class InlineResponse2006 {
    'total': number;
    'length': number;
    'results': Array<OutboundSMS>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<OutboundSMS>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2006.attributeTypeMap;
    }
}

