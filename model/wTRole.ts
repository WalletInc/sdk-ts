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
import { WTEmployee } from './wTEmployee';

export class WTRole {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'employees': Array<WTEmployee>;
    'roles': Array<WTRole>;
    'employeeID': string;
    'merchantID': string;
    'name': string;
    'displayName': string;
    'isPublic': boolean;
    'orderNumber': number;
    'isSystem': boolean;
    'icons': Array<string>;
    'category': string;
    'adminPage': string;

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
            "name": "employees",
            "baseName": "employees",
            "type": "Array<WTEmployee>"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<WTRole>"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "isSystem",
            "baseName": "isSystem",
            "type": "boolean"
        },
        {
            "name": "icons",
            "baseName": "icons",
            "type": "Array<string>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "adminPage",
            "baseName": "adminPage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTRole.attributeTypeMap;
    }
}
