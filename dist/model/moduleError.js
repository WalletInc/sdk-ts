"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleError = void 0;
class ModuleError {
    static getAttributeTypeMap() {
        return ModuleError.attributeTypeMap;
    }
}
exports.ModuleError = ModuleError;
ModuleError.discriminator = undefined;
ModuleError.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "stack",
        "baseName": "stack",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "#id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "#createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "#updatedAt",
        "type": "Date"
    },
    {
        "name": "module",
        "baseName": "#module",
        "type": "string"
    },
    {
        "name": "moduleName",
        "baseName": "#moduleName",
        "type": "string"
    },
    {
        "name": "moduleID",
        "baseName": "#moduleID",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "methodType",
        "baseName": "#methodType",
        "type": "string"
    },
    {
        "name": "stackTrace",
        "baseName": "#stackTrace",
        "type": "any"
    },
    {
        "name": "exception",
        "baseName": "#exception",
        "type": "any"
    },
    {
        "name": "severity",
        "baseName": "#severity",
        "type": "number"
    },
    {
        "name": "microserviceURL",
        "baseName": "#microserviceURL",
        "type": "string"
    },
    {
        "name": "microserviceData",
        "baseName": "#microserviceData",
        "type": "any"
    },
    {
        "name": "microserviceMethod",
        "baseName": "#microserviceMethod",
        "type": "string"
    },
    {
        "name": "microserviceOptions",
        "baseName": "#microserviceOptions",
        "type": "any"
    },
    {
        "name": "microserviceResponseCode",
        "baseName": "#microserviceResponseCode",
        "type": "string"
    },
    {
        "name": "microserviceResponseMessage",
        "baseName": "#microserviceResponseMessage",
        "type": "string"
    },
    {
        "name": "microserviceResponseHTTPStatus",
        "baseName": "#microserviceResponseHTTPStatus",
        "type": "string"
    },
    {
        "name": "microserviceResponseFields",
        "baseName": "#microserviceResponseFields",
        "type": "any"
    }
];
//# sourceMappingURL=moduleError.js.map