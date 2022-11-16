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

export class MSAnalyticsMembershipTierAmountRefundedPartitionedByDate {
    /**
    * Represents the date when the amount was refunded
    */
    'date': string;
    /**
    * Represents the amount refunded on that particular date
    */
    'amount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MSAnalyticsMembershipTierAmountRefundedPartitionedByDate.attributeTypeMap;
    }
}

