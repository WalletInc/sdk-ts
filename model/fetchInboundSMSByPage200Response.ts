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
import { InboundSMS } from './inboundSMS';

export class FetchInboundSMSByPage200Response {
    'total': number;
    'length': number;
    'results': Array<InboundSMS>;

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
            "type": "Array<InboundSMS>"
        }    ];

    static getAttributeTypeMap() {
        return FetchInboundSMSByPage200Response.attributeTypeMap;
    }
}

