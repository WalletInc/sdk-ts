"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTicketsRequest = void 0;
class ImportTicketsRequest {
    static getAttributeTypeMap() {
        return ImportTicketsRequest.attributeTypeMap;
    }
}
exports.ImportTicketsRequest = ImportTicketsRequest;
ImportTicketsRequest.discriminator = undefined;
ImportTicketsRequest.attributeTypeMap = [
    {
        "name": "tickets",
        "baseName": "tickets",
        "type": "Array<WTTicketUpdateParams>"
    }
];
//# sourceMappingURL=importTicketsRequest.js.map