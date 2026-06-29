"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Response.attributeTypeMap);
    }
}
exports.Response = Response;
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "routingID",
        "baseName": "routingID",
        "type": "any"
    },
    {
        "name": "xmlOutput",
        "baseName": "xmlOutput",
        "type": "any"
    },
    {
        "name": "hasError",
        "baseName": "hasError",
        "type": "any"
    },
    {
        "name": "destinationPropertyID",
        "baseName": "destinationPropertyID",
        "type": "any"
    }
];
//# sourceMappingURL=response.js.map