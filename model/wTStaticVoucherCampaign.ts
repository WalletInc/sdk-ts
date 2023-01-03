/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.528
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTStaticVoucherCampaign {
    'id': string | null;
    'title': string;
    'notes': string;
    'valueType': string | null;
    'isLoaded': boolean;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'reinvestmentSum': number;
    'numberOfVouchersInFile': number;
    'campaignGroupID'?: string;
    'bucket'?: string;
    'createdBySourceID': number;
    'originalFileName'?: string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'voucherType': number;
    'reinvestmentSumDecimal': string;
    'reinvestmentSumString': string;
    'startDate': Date;
    'expirationDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "isLoaded",
            "baseName": "isLoaded",
            "type": "boolean"
        },
        {
            "name": "displayValue",
            "baseName": "displayValue",
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
            "name": "reinvestmentSum",
            "baseName": "reinvestmentSum",
            "type": "number"
        },
        {
            "name": "numberOfVouchersInFile",
            "baseName": "numberOfVouchersInFile",
            "type": "number"
        },
        {
            "name": "campaignGroupID",
            "baseName": "campaignGroupID",
            "type": "string"
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string"
        },
        {
            "name": "createdBySourceID",
            "baseName": "createdBySourceID",
            "type": "number"
        },
        {
            "name": "originalFileName",
            "baseName": "originalFileName",
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
            "name": "voucherType",
            "baseName": "voucherType",
            "type": "number"
        },
        {
            "name": "reinvestmentSumDecimal",
            "baseName": "reinvestmentSum_decimal",
            "type": "string"
        },
        {
            "name": "reinvestmentSumString",
            "baseName": "reinvestmentSum_string",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return WTStaticVoucherCampaign.attributeTypeMap;
    }
}
