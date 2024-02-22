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
performances();
function performances() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.PerformancesApi(constants.domain);
        let performance = yield client.createPerformance({
            title: "Performance",
            body: "Details related to the performance",
            startDateTime: new Date(),
            price: 200,
            url: "https://blog.merchant.com",
            orderNumber: 1,
            mediaURL: "https://example.com/image",
            isSoldOut: false,
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(performance);
        performance = yield client.updatePerformance(performance.id, Object.assign({}, performance, { title: "performance Updated" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        performance = yield client.archivePerformance(performance.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(performance.isActive);
        performance = yield client.restorePerformance(performance.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(performance.isActive);
        let performances = (yield client.fetchAllPerformances(false, constants.headers)).body;
        console.log(performances);
    });
}
//# sourceMappingURL=performances.example.js.map