/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.518
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WTDynamicVoucherSummary } from './wTDynamicVoucherSummary';

export class DynamicVoucher {
    'startDate': Date;
    'expirationDate': Date;
    'id': string | null;
    'title': string;
    'notes': string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'startingValue': number;
    'maxBudget': number;
    'temporalDecreaseAmount': number;
    'temporalDecreaseFrequency': number;
    'numericalDecreaseAmount'?: number;
    'numericalDecreaseFrequency'?: number;
    'temporalDecreaseAmountDecimal': string;
    'temporalDecreaseAmountString': string;
    'numericalDecreaseAmountDecimal': string;
    'numericalDecreaseAmountString': string;
    'startingValueDecimal': string;
    'startingValueString': string;
    'maxBudgetDecimal': string;
    'maxBudgetString': string;
    'currentValue': number;
    'currentValueDecimal': string;
    'currentValueString': string;
    'status': string | null;
    'temporalDecreaseFrequencyType': string | null;
    'summary': WTDynamicVoucherSummary;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "merchantsReferenceID",
            "baseName": "merchantsReferenceID",
            "type": "string"
        },
        {
            "name": "validOnlyAtPOSRegisterIDs",
            "baseName": "validOnlyAtPOSRegisterIDs",
            "type": "Array<string>"
        },
        {
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
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
            "name": "startingValue",
            "baseName": "startingValue",
            "type": "number"
        },
        {
            "name": "maxBudget",
            "baseName": "maxBudget",
            "type": "number"
        },
        {
            "name": "temporalDecreaseAmount",
            "baseName": "temporalDecreaseAmount",
            "type": "number"
        },
        {
            "name": "temporalDecreaseFrequency",
            "baseName": "temporalDecreaseFrequency",
            "type": "number"
        },
        {
            "name": "numericalDecreaseAmount",
            "baseName": "numericalDecreaseAmount",
            "type": "number"
        },
        {
            "name": "numericalDecreaseFrequency",
            "baseName": "numericalDecreaseFrequency",
            "type": "number"
        },
        {
            "name": "temporalDecreaseAmountDecimal",
            "baseName": "temporalDecreaseAmount_decimal",
            "type": "string"
        },
        {
            "name": "temporalDecreaseAmountString",
            "baseName": "temporalDecreaseAmount_string",
            "type": "string"
        },
        {
            "name": "numericalDecreaseAmountDecimal",
            "baseName": "numericalDecreaseAmount_decimal",
            "type": "string"
        },
        {
            "name": "numericalDecreaseAmountString",
            "baseName": "numericalDecreaseAmount_string",
            "type": "string"
        },
        {
            "name": "startingValueDecimal",
            "baseName": "startingValue_decimal",
            "type": "string"
        },
        {
            "name": "startingValueString",
            "baseName": "startingValue_string",
            "type": "string"
        },
        {
            "name": "maxBudgetDecimal",
            "baseName": "maxBudget_decimal",
            "type": "string"
        },
        {
            "name": "maxBudgetString",
            "baseName": "maxBudget_string",
            "type": "string"
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "number"
        },
        {
            "name": "currentValueDecimal",
            "baseName": "currentValue_decimal",
            "type": "string"
        },
        {
            "name": "currentValueString",
            "baseName": "currentValue_string",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "temporalDecreaseFrequencyType",
            "baseName": "temporalDecreaseFrequencyType",
            "type": "string"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "WTDynamicVoucherSummary"
        }    ];

    static getAttributeTypeMap() {
        return DynamicVoucher.attributeTypeMap;
    }
}

