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
import { WTEmployeeScheduleSimpleSMSListType } from './wTEmployeeScheduleSimpleSMSListType';

export class WTEmployeeScheduleSimpleSMS {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURLs'?: Array<string>;
    'broadcastScheduledAt': Date;
    'listType': WTEmployeeScheduleSimpleSMSListType;
    'listID': string;

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
            "name": "mediaURLs",
            "baseName": "mediaURLs",
            "type": "Array<string>"
        },
        {
            "name": "broadcastScheduledAt",
            "baseName": "broadcastScheduledAt",
            "type": "Date"
        },
        {
            "name": "listType",
            "baseName": "listType",
            "type": "WTEmployeeScheduleSimpleSMSListType"
        },
        {
            "name": "listID",
            "baseName": "listID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeScheduleSimpleSMS.attributeTypeMap;
    }
}
