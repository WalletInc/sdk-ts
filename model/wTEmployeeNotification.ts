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
import { WTEmployeeNotificationType } from './wTEmployeeNotificationType';

export class WTEmployeeNotification {
    'type': WTEmployeeNotificationType;
    'title': string;
    'content': string;
    'payload'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WTEmployeeNotificationType"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeNotification.attributeTypeMap;
    }
}

