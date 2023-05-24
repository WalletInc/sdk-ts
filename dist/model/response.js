"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }
}
Response.discriminator = undefined;
Response.attributeTypeMap = [
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
    }
];
exports.Response = Response;
//# sourceMappingURL=response.js.map