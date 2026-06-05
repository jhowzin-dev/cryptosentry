export default class GetAllUsers {
  constructor(userService) {
    this.userService = userService;
  }

  async execute() {
    return await this.userService.getAllUsers();
  }
}
