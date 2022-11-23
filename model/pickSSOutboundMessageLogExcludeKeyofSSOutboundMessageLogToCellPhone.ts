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

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone {
    'id': string;
    'employeeID': string;
    'status': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'body': string;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'paymentObjectBroadcastID'?: string | null;
    'bodyTemplate': string;
    'statusCallback': string;
    'isSent': boolean;
    'sentAt'?: Date;
    'deliveredAt'?: Date;
    'messageSid': string;
    'numSegments'?: number;
    'numMedia'?: number;
    'errorCode'?: string | null;
    'errorMessage'?: string | null;

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
            "name": "status",
            "baseName": "status",
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
            "name": "body",
            "baseName": "body",
            "type": "string"
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
            "name": "paymentObjectBroadcastID",
            "baseName": "paymentObjectBroadcastID",
            "type": "string"
        },
        {
            "name": "bodyTemplate",
            "baseName": "bodyTemplate",
            "type": "string"
        },
        {
            "name": "statusCallback",
            "baseName": "statusCallback",
            "type": "string"
        },
        {
            "name": "isSent",
            "baseName": "isSent",
            "type": "boolean"
        },
        {
            "name": "sentAt",
            "baseName": "sentAt",
            "type": "Date"
        },
        {
            "name": "deliveredAt",
            "baseName": "deliveredAt",
            "type": "Date"
        },
        {
            "name": "messageSid",
            "baseName": "messageSid",
            "type": "string"
        },
        {
            "name": "numSegments",
            "baseName": "numSegments",
            "type": "number"
        },
        {
            "name": "numMedia",
            "baseName": "numMedia",
            "type": "number"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone.attributeTypeMap;
    }
}

