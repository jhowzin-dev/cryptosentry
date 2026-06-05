export default class CreateUser {
  constructor(userService) {
    this.userService = userService;
  }

  async execute(userDto) {
    // Returns created user from backend
    return await this.userService.createUser(userDto);
  }
}
