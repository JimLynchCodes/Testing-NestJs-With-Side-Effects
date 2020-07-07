import { Injectable } from '@nestjs/common';
import { User } from '../models.ts/user';

const MongoClient = require('mongodb').MongoClient;
// const uri = "localhost:27017/testing-side-effects-db?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/testing-side-effects-db";

@Injectable()
export class UsersService {

    private client: any
    private uri = "mongodb://localhost:27017/testing-side-effects-db";

    constructor() { }

    private connectToMongo() {

        if (this.client)
            return this.client

        else
            this.client = new MongoClient(this.uri, { useNewUrlParser: true });

        return new Promise((resolve, reject) => {

            this.client.connect(err => {

                if (err) {
                    console.error('connection error')
                    reject(err)
                }

                resolve()

            });
        })
    }

    async getAllUsers() {

        await this.connectToMongo()

        return new Promise((resolve, reject) => {

            this.client
                .db("testing-side-effects-db")
                .collection("users")
                .find()
                .toArray(function(err, result) {
                    if (err) reject(err);

                    console.error('result: ', result)
                    resolve(result);
                })
        })
    }

    async insertUser(user: User): Promise<User> {

        await this.connectToMongo()

        return new Promise(async (resolve, reject) => {

            try {
                const insertResult = this.client
                    .db("testing-side-effects-db")
                    .collection("users")
                    .insertOne(user)

                resolve(insertResult)
            }
            catch (err) {
                console.error('error: ', err)
                reject(err)
            }

        })

    }
}
