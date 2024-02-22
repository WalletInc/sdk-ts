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

export class WTTicketCreateParams {
    'recipientPhoneNumber'?: string;
    'recipientEmailAddress'?: string;
    'recipientMemberID'?: string;
    'isComp'?: boolean;
    /**
    * The number of tickets allocated to the recipient.
    */
    'quantity'?: number;
    'performanceID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recipientPhoneNumber",
            "baseName": "recipientPhoneNumber",
            "type": "string"
        },
        {
            "name": "recipientEmailAddress",
            "baseName": "recipientEmailAddress",
            "type": "string"
        },
        {
            "name": "recipientMemberID",
            "baseName": "recipientMemberID",
            "type": "string"
        },
        {
            "name": "isComp",
            "baseName": "isComp",
            "type": "boolean"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "performanceID",
            "baseName": "performanceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTTicketCreateParams.attributeTypeMap;
    }
}

