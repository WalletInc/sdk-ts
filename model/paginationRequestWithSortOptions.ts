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

export class PaginationRequestWithSortOptions {
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
    * Denotes the key using which the records need to be sorted
    */
    'sortKey'?: PaginationRequestWithSortOptions.SortKeyEnum;
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
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "PaginationRequestWithSortOptions.SortKeyEnum"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaginationRequestWithSortOptions.attributeTypeMap;
    }
}

export namespace PaginationRequestWithSortOptions {
    export enum SortKeyEnum {
        CreatedAt = <any> 'createdAt'
    }
}
