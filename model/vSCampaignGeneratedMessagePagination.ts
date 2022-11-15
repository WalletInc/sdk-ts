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
import { VSCampaignGeneratedMessage } from './vSCampaignGeneratedMessage';

export class VSCampaignGeneratedMessagePagination {
    /**
    * Stores the results as an array
    */
    'results': Array<VSCampaignGeneratedMessage>;
    /**
    * Denotes the length of the results array
    */
    'length': number;
    /**
    * Denotes the total number of records present in the database
    */
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<VSCampaignGeneratedMessage>"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return VSCampaignGeneratedMessagePagination.attributeTypeMap;
    }
}

