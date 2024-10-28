import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "demo-app",
  brokers: ["192.168.1.19:9092"],
});

export default kafka;