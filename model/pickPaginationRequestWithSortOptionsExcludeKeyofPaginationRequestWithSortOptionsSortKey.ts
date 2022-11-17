/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
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
export class PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey {
    /**
    * Denotes if archived records should be included in the response payload
    */
    'isArchiveIncluded'?: boolean;
    /**
    * Denotes the number of records per page
    */
    'pageSize'?: number;
    /**
    * Denotes the page number
    */
    'pageNum'?: number;
    /**
    * Denotes the sort order
    */
    'sortOrder'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isArchiveIncluded",
            "baseName": "isArchiveIncluded",
            "type": "boolean"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        },
        {
            "name": "pageNum",
            "baseName": "pageNum",
            "type": "number"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey.attributeTypeMap;
    }
}

