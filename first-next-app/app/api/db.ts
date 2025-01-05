
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;
export async function ConnectToDb() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@nextjscluster.wj0yu.mongodb.net/?retryWrites=true&w=majority&appName=NextJsCluster`;


    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();

    cachedClient = client;
    cachedDb = client.db('ecormmerce-nextjs');

    return { client, db: client.db('ecormmerce-nextjs') };

}