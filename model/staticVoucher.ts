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
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
import { Status } from './status';
import { WTWalletPageViewId } from './wTWalletPageViewId';

export class StaticVoucher {
    'id': WTWalletPageViewId;
    'campaignID': string;
    'memberID'?: string;
    'cellPhoneNumber'?: string;
    'offerAmountCents': number;
    'orderNumber': number;
    'transactionType': PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType;
    'registerID': PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'redeemedAmount': number;
    'isRedeemed': boolean;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': Status;
    'customerID'?: string;
    'authorizedAgainstCheckNumber': string;
    'authorizedAmount': number;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'authorizedAmountDecimal': string;
    'authorizedAmountString': string;
    'offerAmountCentsDecimal': string;
    'offerAmountCentsString': string;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'dateTimeRedeemed'?: Date | null;
    'dateTimeRefunded'?: Date | null;
    'dateTimeLastViewed'?: Date | null;
    'reasonInvalid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "WTWalletPageViewId"
        },
        {
            "name": "campaignID",
            "baseName": "campaignID",
            "type": "string"
        },
        {
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
        },
        {
            "name": "cellPhoneNumber",
            "baseName": "cellPhoneNumber",
            "type": "string"
        },
        {
            "name": "offerAmountCents",
            "baseName": "offerAmountCents",
            "type": "number"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType"
        },
        {
            "name": "registerID",
            "baseName": "registerID",
            "type": "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID"
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
            "name": "redeemedAmount",
            "baseName": "redeemedAmount",
            "type": "number"
        },
        {
            "name": "isRedeemed",
            "baseName": "isRedeemed",
            "type": "boolean"
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
            "type": "Status"
        },
        {
            "name": "customerID",
            "baseName": "customerID",
            "type": "string"
        },
        {
            "name": "authorizedAgainstCheckNumber",
            "baseName": "authorizedAgainstCheckNumber",
            "type": "string"
        },
        {
            "name": "authorizedAmount",
            "baseName": "authorizedAmount",
            "type": "number"
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
            "name": "authorizedAmountDecimal",
            "baseName": "authorizedAmount_decimal",
            "type": "string"
        },
        {
            "name": "authorizedAmountString",
            "baseName": "authorizedAmount_string",
            "type": "string"
        },
        {
            "name": "offerAmountCentsDecimal",
            "baseName": "offerAmountCents_decimal",
            "type": "string"
        },
        {
            "name": "offerAmountCentsString",
            "baseName": "offerAmountCents_string",
            "type": "string"
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
            "name": "dateTimeRedeemed",
            "baseName": "dateTimeRedeemed",
            "type": "Date"
        },
        {
            "name": "dateTimeRefunded",
            "baseName": "dateTimeRefunded",
            "type": "Date"
        },
        {
            "name": "dateTimeLastViewed",
            "baseName": "dateTimeLastViewed",
            "type": "Date"
        },
        {
            "name": "reasonInvalid",
            "baseName": "reasonInvalid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StaticVoucher.attributeTypeMap;
    }
}

