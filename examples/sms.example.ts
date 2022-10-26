import * as api from "wallet";
import * as constants from "./constants";

smsExample();

async function smsExample() {
    let client = new api.SMSApi(constants.domain);

    // Acquire phone number
    let phoneNumber = await client.acquirePhoneNumber({
        phoneNumber: "+1807675656"
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber);

    // Send phone number for verification
    await client.sendPhoneNumberForVerification(phoneNumber.id, {
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

    // Archive phone number
    phoneNumber = await client.archivePhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber.isActive); // This will be false

    // Restore phone number
    phoneNumber = await client.restorePhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber.isActive); // This will be true

    // Create SMS agreement
    let agreement = await client.createSMSAgreement({
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

    // Fetch the agreement
    agreement = await client.fetchSMSAgreement(constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(agreement);

    // Create imported list
    let importedList = await client.createImportedList({
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


    // Create recipient in imported list
    let recipient = await client.createRecipientInImportedList({
        importedListID: importedList.id,
        mobilePhoneNumber: "+1805654545"
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(recipient);

    // Count recipients in imported list
    let { count } = await client.countImportedListRecipients(importedList.id, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(count);

    // Fetch recipients
    let importedListRecipients = await client.fetchImportedListRecipients(importedList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(importedListRecipients);

    // Fetch recipients by page
    let importedListRecipientByPage = await client.fetchImportedListRecipientsByPage(importedList.id, 10, 1, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(`Total: ${importedListRecipientByPage.total}, Length: ${importedListRecipientByPage.length}, List: ${JSON.stringify(importedListRecipientByPage.results)}`);

    // Export recipients
    await client.exportImportedListRecipients(importedList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    // Create opt in list
    let optInList = await client.createOptInList({
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

    // Count opt in list subscribers
    count = await client.countOptInListSubscribers(optInList.id, true, false, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });

    console.log(count);

    // Export opt in list subscribers
    await client.exportOptInListSubscribers(optInList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    // Fetch subscribers
    let optInListRecipients = await client.fetchOptInListSubscribers(optInList.id, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInListRecipients);

    // Fetch subscribers by page
    let optInListRecipientByPage = await client.fetchOptInListSubscribersByPage(optInList.id, 10, 1, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(`Total: ${optInListRecipientByPage.total}, Length: ${optInListRecipientByPage.length}, List: ${JSON.stringify(optInListRecipientByPage.results)}`);

    // Fetch all opt in lists associated with the given phone number

    let optInListsAssociatedWithPhoneNumber = await client.fetchOptInListsAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInListsAssociatedWithPhoneNumber);

    // Create opt in source
    let optInSource = await client.createOptInListSource({
        sourceName: "Opt In Source",
        listID: optInList.id,
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(optInSource);


    // Count subscribers in opt in list source
    count = await client.countOptInSourceSubscribers(optInSource.id, true, false, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });

    console.log(count);

    let optInSourceSubscribers = await client.fetchOptInSourceSubscribers(optInSource.id, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInSourceSubscribers);

    let optInSourcesAssociatedWithPhoneNumber = await client.fetchOptInSourcesAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInSourcesAssociatedWithPhoneNumber);

    // Fetch all outbound SMSes
    let outboundSMSes = await client.fetchOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(outboundSMSes);

    // Fetch outbound SMSes by page
    let outboundSMSesByPage = await client.fetchOutboundSMSByPage(phoneNumber.id, undefined, undefined, 10, 1, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(`Total: ${outboundSMSesByPage.total}, Length: ${outboundSMSesByPage.length}, Messages: ${JSON.stringify(outboundSMSesByPage.results)}`);


    // Count outbound SMSes
    let outboundSMSesCount = await client.countOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });
    console.log(outboundSMSesCount);

    // Retrieve message limits
    let limits = await client.retrieveSentAndMaxCountOfMessages(constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(`Max: ${limits.max}, Sent: ${limits.sent}`);
}