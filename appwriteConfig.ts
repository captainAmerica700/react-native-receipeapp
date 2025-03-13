import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('67d187d9001139f00079'); // Replace with your project ID

const account = new Account(client);

export { client, account };
