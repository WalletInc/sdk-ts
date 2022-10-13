import * as api from "wallet";
import * as constants from "./constants";

performances();

async function performances() {
    let client = new api.PerformancesApi(constants.domain);

    // Create a new performance
    let performance = await client.createPerformance({
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
        return resp.body
    });


    // The performance that has just been created
    console.log(performance);

    // Update the performance with a new title
    performance = await client.updatePerformance(performance.id, {
        ...performance,
        title: "performance Updated"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the performance
    performance = await client.archivePerformance(performance.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(performance.isActive); // This will be false, since the performance has just been archived

    // Restore the performance
    performance = await client.restorePerformance(performance.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(performance.isActive); // This will be true, since the performance has just been restored

    // Fetch all performances
    let performances = (await client.fetchAllPerformances(false, constants.headers)).body;
    console.log(performances);
}