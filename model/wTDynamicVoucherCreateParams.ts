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

export class WTDynamicVoucherCreateParams {
    'title': string;
    'notes': string;
    'paymentDesignID': string;
    'dateTimeStart': Date;
    'dateTimeExpiration': Date;
    'startingValue': number;
    'maxBudget': number;
    'decreaseAmount': number;
    'frequency': number;
    'frequencyType': string | null;
    'decreaseBy'?: number;
    'decreaseEvery'?: number;
    'isActive': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
            "type": "string"
        },
        {
            "name": "dateTimeStart",
            "baseName": "dateTimeStart",
            "type": "Date"
        },
        {
            "name": "dateTimeExpiration",
            "baseName": "dateTimeExpiration",
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
            "name": "decreaseAmount",
            "baseName": "decreaseAmount",
            "type": "number"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "number"
        },
        {
            "name": "frequencyType",
            "baseName": "frequencyType",
            "type": "string"
        },
        {
            "name": "decreaseBy",
            "baseName": "decreaseBy",
            "type": "number"
        },
        {
            "name": "decreaseEvery",
            "baseName": "decreaseEvery",
            "type": "number"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WTDynamicVoucherCreateParams.attributeTypeMap;
    }
}

