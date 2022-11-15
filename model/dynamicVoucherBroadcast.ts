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
import { DynamicVoucher } from './dynamicVoucher';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';

export class DynamicVoucherBroadcast {
    'phoneNumberID': string;
    'paymentObjectPrefix': string | null;
    'paymentObjectID': string;
    'messageTemplate': string;
    'mediaURLs': Array<string>;
    'employeeID': string;
    'broadcastScheduledAt': Date;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'broadcastStatus': string | null;
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
    'listType': string | null;
    'listID': string;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'dynamicVoucher': DynamicVoucher;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumberID",
            "baseName": "phoneNumberID",
            "type": "string"
        },
        {
            "name": "paymentObjectPrefix",
            "baseName": "paymentObjectPrefix",
            "type": "string"
        },
        {
            "name": "paymentObjectID",
            "baseName": "paymentObjectID",
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
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "broadcastScheduledAt",
            "baseName": "broadcastScheduledAt",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "broadcastStatus",
            "baseName": "broadcastStatus",
            "type": "string"
        },
        {
            "name": "broadcastQueuedAt",
            "baseName": "broadcastQueuedAt",
            "type": "Date"
        },
        {
            "name": "broadcastStartedAt",
            "baseName": "broadcastStartedAt",
            "type": "Date"
        },
        {
            "name": "broadcastCompletedAt",
            "baseName": "broadcastCompletedAt",
            "type": "Date"
        },
        {
            "name": "listType",
            "baseName": "listType",
            "type": "string"
        },
        {
            "name": "listID",
            "baseName": "listID",
            "type": "string"
        },
        {
            "name": "optInList",
            "baseName": "OptInList",
            "type": "WTOptInList"
        },
        {
            "name": "importedList",
            "baseName": "ImportedList",
            "type": "WTImportedList"
        },
        {
            "name": "dynamicVoucher",
            "baseName": "DynamicVoucher",
            "type": "DynamicVoucher"
        }    ];

    static getAttributeTypeMap() {
        return DynamicVoucherBroadcast.attributeTypeMap;
    }
}

