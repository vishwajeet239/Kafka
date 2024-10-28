import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("admin CONNECTING ...");
  admin.connect();
  console.log(" Admin CONNECTED SUCCESSFULlY");

  console.log(" Creating topic rider updates ...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-update",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic rider-update created successfully");
  console.log("Admin DISCONNECTING ...");
  await admin.disconnect();
};

init(); 
