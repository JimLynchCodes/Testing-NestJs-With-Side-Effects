import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { MongoMemoryServer } from 'mongodb-memory-server'
import { recreateAndSeedCollection } from '../utils/users-seed-data'

const MongoClient = require('mongodb').MongoClient;

describe('UsersService', () => {
  let service: UsersService;

  let mongoServer: MongoMemoryServer;
  let mongoClient: any;


  beforeEach(async done => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);

    mongoServer = new MongoMemoryServer();

    service['uri'] = await mongoServer.getUri()

    mongoClient = new MongoClient(service['uri'], { useNewUrlParser: true });

    mongoClient.connect(async err => {

      await recreateAndSeedCollection(mongoClient, 'users')

      done()

    });

  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('insertUser', () => {

    it('should insert the user document', async done => {

      const fakeUser = {
        firstName: 'foo',
        surnameName: 'foo',
        username: 'foo',
        email: 'foo'
      };

      const actualResult: any = await service.insertUser(fakeUser);

      expect(actualResult.ops).toStrictEqual([fakeUser])

      const expectedDocs = [fakeUser]

      mongoClient
        .db("testing-side-effects-db")
        .collection("users")
        .find()
        .toArray(function (err, actualDocs) {
          if (err) throw (err);

          expect(actualDocs).toStrictEqual(expectedDocs)

          done()
        })

    });

  })

  afterAll(async () => {
    await mongoClient.connection.close()
    await mongoServer.stop()
  });

});
