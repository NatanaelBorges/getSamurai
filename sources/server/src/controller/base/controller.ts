import { Request } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../database/data-source';
import { BaseNotification } from '../../database/entities/base/notification';

export abstract class BaseController<T> extends BaseNotification {
  private _repository: Repository<T>;

  constructor(entity: any) {
    super();
    this._repository = AppDataSource.getRepository<T>(entity);
  }

  async all() {
    return this._repository.find();
  }

  async one(request: Request) {
    return this._repository.findOneBy(request.params.id);
  }

  async save(model: any) {
    if (model.id) {
      let _modelInDB = await this._repository.findOneBy(model.id);
      if (_modelInDB) {
        Object.assign(_modelInDB, model);
      }
    }

    if (this.valid()) return this._repository.save(model);
    else
      return {
        status: 400,
        errors: this.allNotifications,
      };
  }

  async remove(request: Request) {
    let id = request.params.id;
    let model: any = await this._repository.find(id);
    if (model) {
      model.deleted = true;
    }
    return this._repository.save(model);
  }
}
