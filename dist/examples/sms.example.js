"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("wallet"));
const constants = __importStar(require("./constants"));
smsExample();
function smsExample() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.SMSApi(constants.domain);
        let phoneNumber = yield client.acquirePhoneNumber({
            phoneNumber: "+1807675656"
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(phoneNumber);
        yield client.sendPhoneNumberForVerification(phoneNumber.id, {
            helpDeskQueueResponse: "HELPME",
            helpDeskKeyword: "HELP12",
            helpResponse: "Hello, we're here to help.",
            stopResponse: "We're sad to see you go",
            messageFooter: "Subscribe for more info!",
            termsOfServiceURL: "https://example.com/terms-of-service",
            privacyPolicyURL: "https://example.com/privacy-policy",
            companyName: "Fictitious Corporation"
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        phoneNumber = yield client.archivePhoneNumber(phoneNumber.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(phoneNumber.isActive);
        phoneNumber = yield client.restorePhoneNumber(phoneNumber.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(phoneNumber.isActive);
        let agreement = yield client.createSMSAgreement({
            isShortCodeTimelineUnderstood: true,
            isPricingUnderstood: true,
            isShortCodeTransferUnderstood: true,
            isOptInOutUnderstood: true,
            isShortCodeUnderstood: true,
            isStandardsUnderstood: true,
            isCtiaShortCodeRead: true,
            isManualRead: true,
            isStopUnderstood: true,
            isTosOnWebsite: true,
            isPrivacyPolicyOnWebsite: true,
            isTwilioTermsRead: true,
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(agreement);
        agreement = yield client.fetchSMSAgreement(constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(agreement);
        let importedList = yield client.createImportedList({
            listName: "Imported List",
            isActive: true,
            phoneNumberID: phoneNumber.id
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(importedList);
        let recipient = yield client.createRecipientInImportedList({
            importedListID: importedList.id,
            mobilePhoneNumber: "+1805654545"
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(recipient);
        let { count } = yield client.countImportedListRecipients(importedList.id, false, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(count);
        let importedListRecipients = yield client.fetchImportedListRecipients(importedList.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(importedListRecipients);
        let importedListRecipientByPage = yield client.fetchImportedListRecipientsByPage(importedList.id, 10, 1, false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(`Total: ${importedListRecipientByPage.total}, Length: ${importedListRecipientByPage.length}, List: ${JSON.stringify(importedListRecipientByPage.results)}`);
        yield client.exportImportedListRecipients(importedList.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let optInList = yield client.createOptInList({
            isActive: true,
            listName: "Opt In List",
            phoneNumberID: phoneNumber.id,
            estimatedMessagesPerMonth: 250,
            optInKeyword: "OPTIN",
            optOutKeyword: "OPTOUT",
            optInConfirmedResponse: "You've opted in",
            optOutConfirmedResponse: "You've opted out",
            optInConfirmedCustomerReceives: "You've opted in",
            optOutConfirmedCustomerReceives: "You've opted out",
            isOver21Required: false,
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInList);
        count = yield client.countOptInListSubscribers(optInList.id, true, false, false, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });
        console.log(count);
        yield client.exportOptInListSubscribers(optInList.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let optInListRecipients = yield client.fetchOptInListSubscribers(optInList.id, true, false, false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInListRecipients);
        let optInListRecipientByPage = yield client.fetchOptInListSubscribersByPage(optInList.id, 10, 1, true, false, false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(`Total: ${optInListRecipientByPage.total}, Length: ${optInListRecipientByPage.length}, List: ${JSON.stringify(optInListRecipientByPage.results)}`);
        let optInListsAssociatedWithPhoneNumber = yield client.fetchOptInListsAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInListsAssociatedWithPhoneNumber);
        let optInSource = yield client.createOptInListSource({
            sourceName: "Opt In Source",
            listID: optInList.id,
        }, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInSource);
        count = yield client.countOptInSourceSubscribers(optInSource.id, true, false, false, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });
        console.log(count);
        let optInSourceSubscribers = yield client.fetchOptInSourceSubscribers(optInSource.id, true, false, false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInSourceSubscribers);
        let optInSourcesAssociatedWithPhoneNumber = yield client.fetchOptInSourcesAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(optInSourcesAssociatedWithPhoneNumber);
        let outboundSMSes = yield client.fetchOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(outboundSMSes);
        let outboundSMSesByPage = yield client.fetchOutboundSMSByPage(phoneNumber.id, undefined, undefined, 10, 1, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(`Total: ${outboundSMSesByPage.total}, Length: ${outboundSMSesByPage.length}, Messages: ${JSON.stringify(outboundSMSesByPage.results)}`);
        let outboundSMSesCount = yield client.countOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });
        console.log(outboundSMSesCount);
        let limits = yield client.retrieveSentAndMaxCountOfMessages(constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(`Max: ${limits.max}, Sent: ${limits.sent}`);
    });
}
//# sourceMappingURL=sms.example.js.map