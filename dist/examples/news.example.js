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
news();
function news() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.NewsApi(constants.domain);
        let article = yield client.createNewsArticle({
            title: "News Article",
            orderNumber: 1,
            body: "This is a news article related to the merchant",
            url: "https://blog.merchant.com",
            mediaURL: "https://example.com/image"
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(article);
        article = yield client.updateNewsArticle(article.id, Object.assign({}, article, { title: "News Article Updated" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        article = yield client.archiveNewsArticle(article.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(article.isActive);
        article = yield client.restoreNewsArticle(article.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(article.isActive);
        let articles = (yield client.fetchAllNewsArticles(false, constants.headers)).body;
        console.log(articles);
    });
}
//# sourceMappingURL=news.example.js.map