/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.533
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate {
    /**
    * Represents the date of amount redemption
    */
    'date': string;
    /**
    * Represents the amount redeemed on that particular date
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
        return MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate.attributeTypeMap;
    }
}

