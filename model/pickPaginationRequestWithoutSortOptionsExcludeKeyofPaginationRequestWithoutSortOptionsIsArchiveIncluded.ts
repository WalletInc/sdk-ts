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
export class PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded {
    /**
    * Denotes the number of records per page
    */
    'pageSize'?: number;
    /**
    * Denotes the page number
    */
    'pageNum'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        },
        {
            "name": "pageNum",
            "baseName": "pageNum",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded.attributeTypeMap;
    }
}

