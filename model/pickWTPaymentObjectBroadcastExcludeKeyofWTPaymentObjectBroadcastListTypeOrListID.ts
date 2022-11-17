/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID {
    'id': string | null;
    'employeeID': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'broadcastStatus': string | null;
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
    'paymentObjectPrefix': string | null;
    'paymentObjectID': string;
    'messageTemplate': string;
    'broadcastScheduledAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
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
            "name": "phoneNumberID",
            "baseName": "phoneNumberID",
            "type": "string"
        },
        {
            "name": "mediaURLs",
            "baseName": "mediaURLs",
            "type": "Array<string>"
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
            "name": "broadcastScheduledAt",
            "baseName": "broadcastScheduledAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID.attributeTypeMap;
    }
}

