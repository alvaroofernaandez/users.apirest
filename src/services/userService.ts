import { IUserService, User, IUserRepository } from "types/UserTypes";

export class UserService implements IUserService {
  
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}