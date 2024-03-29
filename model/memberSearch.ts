/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MemberSearchSearchKey } from './memberSearchSearchKey';
import { MemberSearchSortKey } from './memberSearchSortKey';
import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';

export class MemberSearch {
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
    'sortOrder'?: PaginationRequestWithSortOptionsSortOrder;
    'sortKey'?: MemberSearchSortKey;
    'searchKey': MemberSearchSearchKey;
    /**
    * The search value to be queried
    */
    'searchValue': string;

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
            "type": "PaginationRequestWithSortOptionsSortOrder"
        },
        {
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "MemberSearchSortKey"
        },
        {
            "name": "searchKey",
            "baseName": "searchKey",
            "type": "MemberSearchSearchKey"
        },
        {
            "name": "searchValue",
            "baseName": "searchValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MemberSearch.attributeTypeMap;
    }
}

