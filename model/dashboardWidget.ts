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

export class DashboardWidget {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'divID': string;
    'title': string;
    'subtitle': string;
    'cssClass': string;
    'icon': string;
    'route': string;
    'type': string;
    'orderNumber': number;
    'isDefault': boolean;
    'category': string;
    'categoryIcon': string;
    'categoryOrderNumber': number;
    'pageName': string;

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
            "name": "divID",
            "baseName": "divID",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "subtitle",
            "baseName": "subtitle",
            "type": "string"
        },
        {
            "name": "cssClass",
            "baseName": "cssClass",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "route",
            "baseName": "route",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "categoryIcon",
            "baseName": "categoryIcon",
            "type": "string"
        },
        {
            "name": "categoryOrderNumber",
            "baseName": "categoryOrderNumber",
            "type": "number"
        },
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DashboardWidget.attributeTypeMap;
    }
}

