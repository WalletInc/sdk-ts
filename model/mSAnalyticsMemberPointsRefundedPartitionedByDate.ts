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

export class MSAnalyticsMemberPointsRefundedPartitionedByDate {
    /**
    * Represents the date when the points were refunded
    */
    'date': string;
    /**
    * Represents the sum of points refunded on that particular date
    */
    'points': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MSAnalyticsMemberPointsRefundedPartitionedByDate.attributeTypeMap;
    }
}
