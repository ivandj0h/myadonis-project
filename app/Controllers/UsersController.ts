import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index(_ctx: HttpContextContract) {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '+2348012345678',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        phone: '+2348012345678',
      }
    ]
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
