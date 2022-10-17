/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.514
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTEmployeeScheduleSimpleSMSToRecipient {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURL'?: string;
    'broadcastScheduledAt': Date;
    'toCellPhone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumberID",
            "baseName": "phoneNumberID",
            "type": "string"
        },
        {
            "name": "messageTemplate",
            "baseName": "messageTemplate",
            "type": "string"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
        {
            "name": "broadcastScheduledAt",
            "baseName": "broadcastScheduledAt",
            "type": "Date"
        },
        {
            "name": "toCellPhone",
            "baseName": "toCellPhone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeScheduleSimpleSMSToRecipient.attributeTypeMap;
    }
}

