/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.521
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PaginationRequestWithIDAndWithoutSortOptions {
    /**
    * Denotes the number of records per page
    */
    'pageSize'?: number;
    /**
    * Denotes the page number
    */
    'pageNum'?: number;
    'id': string;

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
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaginationRequestWithIDAndWithoutSortOptions.attributeTypeMap;
    }
}

