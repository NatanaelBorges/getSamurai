import { Request } from "express"
import { User } from "../database/entities/user"
import { BaseController } from './base/controller'

export class UserController extends BaseController<User> {

    constructor() {
        super(User);
    }

    async save(request: Request) {
        let _user = <User>request.body;
        super.isRequired(_user.name, 'username is required');
        super.isRequired(_user.photo, 'photo is required');
        return super.save(_user);
    }
}