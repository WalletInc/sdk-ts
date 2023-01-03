/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.528
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Response {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'routingID': string;
    'xmlOutput': string;
    'hasError': boolean;
    'destinationPropertyID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "routingID",
            "baseName": "routingID",
            "type": "string"
        },
        {
            "name": "xmlOutput",
            "baseName": "xmlOutput",
            "type": "string"
        },
        {
            "name": "hasError",
            "baseName": "hasError",
            "type": "boolean"
        },
        {
            "name": "destinationPropertyID",
            "baseName": "destinationPropertyID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }
}

