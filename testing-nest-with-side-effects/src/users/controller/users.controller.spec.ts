import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';

describe('Users Controller', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('insertUser', () => {

    it('should return what users.service insertUser returns', async() => {
      
      const fakeUserToInsert = {
        firstName: 'Jim',
        surnameName: 'Lynch',
        username: 'JimLynchCodes',
        email: 'foobar@gmail.com'
      }

      jest.spyOn(usersService, 'insertUser').mockResolvedValue(fakeUserToInsert)

      const controllerResponse = await controller.insertUser(fakeUserToInsert)
      
      expect(controllerResponse).toStrictEqual(fakeUserToInsert)

      expect(usersService.insertUser).toHaveBeenCalledWith(fakeUserToInsert)
      
    });
  
  });

});
