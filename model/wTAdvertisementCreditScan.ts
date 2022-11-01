/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Status } from './status';

export class WTAdvertisementCreditScan {
    'id': string | null;
    'isActive': boolean;
    /**
    * The type of the transaction - only redemption at the moment
    */
    'transactionType': string | null;
    /**
    * The ID of the register where the transaction occurred
    */
    'registerID': string | number | null;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'redeemedAmount': number;
    'isRedeemed': boolean;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': Status;
    'authorizedAgainstCheckNumber': string;
    'authorizedAmount': number;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'advertisementCreditID': string;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'authorizedAmountDecimal': string;
    'authorizedAmountString': string;
    'dateTimeRedeemed': Date | null;
    'dateTimeRefunded': Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
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
            "name": "advertisementCreditID",
            "baseName": "advertisementCreditID",
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
            "name": "dateTimeRedeemed",
            "baseName": "dateTimeRedeemed",
            "type": "Date"
        },
        {
            "name": "dateTimeRefunded",
            "baseName": "dateTimeRefunded",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return WTAdvertisementCreditScan.attributeTypeMap;
    }
}

