/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RoleAuditLog {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'roleName': string;
    'action': string;
    'merchantID': string;
    'actionByEmployeeID': string;
    'actionByEmployeeName': string;
    'actionOnEmployeeID': string;
    'actionOnEmployeeName': string;
    'displayName': string;
    'isSystem': boolean;

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
            "name": "roleName",
            "baseName": "roleName",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "actionByEmployeeID",
            "baseName": "actionByEmployeeID",
            "type": "string"
        },
        {
            "name": "actionByEmployeeName",
            "baseName": "actionByEmployeeName",
            "type": "string"
        },
        {
            "name": "actionOnEmployeeID",
            "baseName": "actionOnEmployeeID",
            "type": "string"
        },
        {
            "name": "actionOnEmployeeName",
            "baseName": "actionOnEmployeeName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "isSystem",
            "baseName": "isSystem",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RoleAuditLog.attributeTypeMap;
    }
}

