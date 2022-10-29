"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardWidget = void 0;
class DashboardWidget {
    static getAttributeTypeMap() {
        return DashboardWidget.attributeTypeMap;
    }
}
exports.DashboardWidget = DashboardWidget;
DashboardWidget.discriminator = undefined;
DashboardWidget.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=dashboardWidget.js.map