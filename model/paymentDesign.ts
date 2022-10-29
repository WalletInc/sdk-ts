/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.518
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PaymentDesign {
    'borderColor': string;
    'borderStyleType': string | null;
    'borderSize': string;
    'borderRadius': number;
    'fontColor': string;
    'fontType': string;
    'abbreviation': string;
    'acronym': string;
    'icon': string;
    'designName': string;
    'displayName': string;
    'backgroundImageURL'?: string;
    'companyLogoURL'?: string;
    'employeeID': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "borderColor",
            "baseName": "borderColor",
            "type": "string"
        },
        {
            "name": "borderStyleType",
            "baseName": "borderStyleType",
            "type": "string"
        },
        {
            "name": "borderSize",
            "baseName": "borderSize",
            "type": "string"
        },
        {
            "name": "borderRadius",
            "baseName": "borderRadius",
            "type": "number"
        },
        {
            "name": "fontColor",
            "baseName": "fontColor",
            "type": "string"
        },
        {
            "name": "fontType",
            "baseName": "fontType",
            "type": "string"
        },
        {
            "name": "abbreviation",
            "baseName": "abbreviation",
            "type": "string"
        },
        {
            "name": "acronym",
            "baseName": "acronym",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "designName",
            "baseName": "designName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "backgroundImageURL",
            "baseName": "backgroundImageURL",
            "type": "string"
        },
        {
            "name": "companyLogoURL",
            "baseName": "companyLogoURL",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
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
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentDesign.attributeTypeMap;
    }
}

