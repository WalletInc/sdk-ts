"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("wallet"));
const constants = __importStar(require("./constants"));
linkBook();
function linkBook() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.LinkBookApi(constants.domain);
        let link = yield client.createLinkBook({
            title: "External Link",
            url: "https://example.com",
            icon: "fa-clock",
            orderNumber: 1,
            linkBookSectionID: "",
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(link);
        link = yield client.updateLinkBook(link.id, Object.assign({}, link, { url: "https://test.com" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        link = yield client.archiveLinkBook(link.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(link.isActive);
        link = yield client.restoreLinkBook(link.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(link.isActive);
        let links = (yield client.fetchAllLinkBook(false, constants.headers)).body;
        console.log(links);
    });
}
//# sourceMappingURL=linkbook.example.js.map