"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportTicketsRequest {
    static getAttributeTypeMap() {
        return ImportTicketsRequest.attributeTypeMap;
    }
}
ImportTicketsRequest.discriminator = undefined;
ImportTicketsRequest.attributeTypeMap = [
    {
        "name": "tickets",
        "baseName": "tickets",
        "type": "Array<WTTicketUpdateParams>"
    }
];
exports.ImportTicketsRequest = ImportTicketsRequest;
//# sourceMappingURL=importTicketsRequest.js.map