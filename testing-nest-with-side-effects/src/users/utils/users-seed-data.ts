


const fakeUserBillyBob = {
    firstName: 'Billy',
    surnameName: 'Bob',
    username: 'BBBBB',
    email: 'bbbb.bbbb@gmail.com'
}

const fakeUserSallyMcNally = {
    firstName: 'Sally',
    surnameName: 'McNally',
    username: 'sallySall42',
    email: 'sally.mcn@aol.com'
}

export const recreateAndSeedCollection = (mongoClient: any, collectionName: string, insertFakeUsers: boolean = false) => {

    return new Promise(async resolve => {

        const collection = mongoClient
            .db("testing-side-effects-db")
            .collection(collectionName)

        await collection.deleteMany({});

        if (insertFakeUsers)
            return new Promise((resolve, reject) => {

                mongoClient
                    .db("testing-side-effects-db")
                    .collection(collectionName)
                    .insertOne(fakeUserBillyBob)

                try {
                    const insertResult = collection.insertOne(fakeUserBillyBob)

                    resolve(insertResult)
                }
                catch (err) {
                    console.error('error: ', err)
                    reject(err)
                }

            })

        resolve([])
    })

}