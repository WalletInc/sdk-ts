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
advertisementCredits();
function advertisementCredits() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.AdvertisementCreditsApi(constants.domain);
        let title = "Ad Credit API Client (New Headers)";
        let adCredit = yield client.createAdvertisementCredit({
            title: title,
            valueType: "percent",
            paymentDesignID: "jbkVgPTgoo",
            maxUses: 5,
            discountValue: 500,
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(adCredit);
        adCredit = (yield client.fetchAdvertisementCreditById(adCredit.id, constants.headers)).body;
        console.log(adCredit);
        adCredit = yield client.updateAdvertisementCredit(adCredit.id, {
            title: `${title} Update`,
            valueType: "percent",
            paymentDesignID: "jbkVgPTgoo",
            maxUses: 10,
            discountValue: 1000,
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let scans = (yield client.fetchAdvertisementCreditScans(adCredit.id, constants.headers)).body;
        console.log("All scans: " + JSON.stringify(scans));
        adCredit = yield client.archiveAdvertisementCredit(adCredit.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(adCredit.isActive);
        adCredit = yield client.restoreAdvertisementCredit(adCredit.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(adCredit.isActive);
        let adCredits = (yield client.fetchAllAdvertisementCredits(false, constants.headers)).body;
        console.log("Active advertisement credits: ", JSON.stringify(adCredit));
    });
}
//# sourceMappingURL=advertisementcredits.example.js.map