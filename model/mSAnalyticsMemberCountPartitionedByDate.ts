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

export class MSAnalyticsMemberCountPartitionedByDate {
    /**
    * Represents the date of creation (or addition) of members into the platform
    */
    'date': string;
    /**
    * Represents the number of members that were added on that particular date
    */
    'count': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MSAnalyticsMemberCountPartitionedByDate.attributeTypeMap;
    }
}

