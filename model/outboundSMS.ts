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
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus';
import { WTWalletPageViewId } from './wTWalletPageViewId';

export class OutboundSMS {
    'id': WTWalletPageViewId;
    'employeeID': string;
    'status': PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'body': string;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'paymentObjectBroadcastID'?: PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID;
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
    'to': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "WTWalletPageViewId"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus"
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
            "type": "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID"
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
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutboundSMS.attributeTypeMap;
    }
}

