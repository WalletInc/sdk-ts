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
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';

export class WTDynamicVoucherRedemption {
    'sessionKey': string;
    'redeemedAmount': number;
    'dynamicVoucherID': string;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    /**
    * The type of the transaction - only redemption at the moment
    */
    'transactionType': string | null;
    /**
    * The ID of the register where the transaction occurred
    */
    'registerID': string | number | null;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'redeemedAt'?: Date | null;
    'refundedAt'?: Date | null;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': VSDynamicVoucherStatus;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'discountReceived': string;
    'metaValue': string;
    'parentObjectID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sessionKey",
            "baseName": "sessionKey",
            "type": "string"
        },
        {
            "name": "redeemedAmount",
            "baseName": "redeemedAmount",
            "type": "number"
        },
        {
            "name": "dynamicVoucherID",
            "baseName": "dynamicVoucherID",
            "type": "string"
        },
        {
            "name": "redeemedSource",
            "baseName": "redeemedSource",
            "type": "string"
        },
        {
            "name": "redeemedTransactionID",
            "baseName": "redeemedTransactionID",
            "type": "string"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "string"
        },
        {
            "name": "registerID",
            "baseName": "registerID",
            "type": "string | number"
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
            "name": "redeemedAt",
            "baseName": "redeemedAt",
            "type": "Date"
        },
        {
            "name": "refundedAt",
            "baseName": "refundedAt",
            "type": "Date"
        },
        {
            "name": "refundedTransactionID",
            "baseName": "refundedTransactionID",
            "type": "string"
        },
        {
            "name": "refundedAmount",
            "baseName": "refundedAmount",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "VSDynamicVoucherStatus"
        },
        {
            "name": "redeemedAmountDecimal",
            "baseName": "redeemedAmount_decimal",
            "type": "string"
        },
        {
            "name": "redeemedAmountString",
            "baseName": "redeemedAmount_string",
            "type": "string"
        },
        {
            "name": "discountReceived",
            "baseName": "discountReceived",
            "type": "string"
        },
        {
            "name": "metaValue",
            "baseName": "metaValue",
            "type": "string"
        },
        {
            "name": "parentObjectID",
            "baseName": "parentObjectID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTDynamicVoucherRedemption.attributeTypeMap;
    }
}

