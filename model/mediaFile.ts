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

export class MediaFile {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    /**
    * The URL of the file
    */
    'fileURL': string;
    /**
    * The type of the file
    */
    'fileType': string;
    /**
    * The name of the file
    */
    'fileName': string;
    /**
    * The size of the file
    */
    'fileSize': number;
    /**
    * The folder in which the file is stored
    */
    'folder': string;
    'employeeID': string;

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
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "fileURL",
            "baseName": "fileURL",
            "type": "string"
        },
        {
            "name": "fileType",
            "baseName": "fileType",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number"
        },
        {
            "name": "folder",
            "baseName": "folder",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MediaFile.attributeTypeMap;
    }
}

