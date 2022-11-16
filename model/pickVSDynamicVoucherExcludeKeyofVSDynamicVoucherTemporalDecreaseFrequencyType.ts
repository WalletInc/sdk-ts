/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
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
export class PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType {
    'startDate': Date;
    'expirationDate': Date;
    'id': string;
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
        }    ];

    static getAttributeTypeMap() {
        return PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType.attributeTypeMap;
    }
}

