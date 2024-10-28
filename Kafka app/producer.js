import kafka from "./client.js";

async function init() {
    const producer = kafka.producer();
    console.log("connecting producer");

    await producer.connect();
    console.log("producer connected successfully");

    await producer.send({
        partition:0,
        topic: "rider-update",
        messages: [
            {key: 'location-update', value: JSON.stringify({name:"Ajay", location:'South'})}
        ]
    });

   await producer.disconnect();
}

init();