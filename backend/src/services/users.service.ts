import { TaskDocument } from './../schemas/tasks.schema'
import { UserDocument } from './../schemas/users.schema'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private User: Model<UserDocument>,
    @InjectModel('Tasks') private Tasks: Model<TaskDocument>,
  ) {}

  async create(userData: any) {
    const data = { ...userData, id: '' }
    let isNotUser = false
    const words = 'abcdefghijklmnopqrstuvwxyz'
    let attempt = 0

    while (isNotUser != true && attempt < 9999) {
      let id = ''
      for (let i = 0; i <= 14; i++) {
        id += words.charAt(Math.floor(Math.random() * words.length))
      }
      const isUser = await this.User.findOne({ id: id }).lean().exec()
      if (!isUser) {
        data.id = id
        isNotUser = true
      }
      attempt++
    }

    // const user = await this.User.create(data);
    const user = new this.User(data)
    const userDocument = await user.save()
    return userDocument
  }

  async findAll() {
    return await this.User.find().exec()
  }

  async getUserByID(id: string) {
    const res = await this.User.findOne({ id: id }).exec()
    return res
  }

  async getUserByEmail(email: string) {
    const res = await this.User.findOne({ email: email }).exec()
    console.log(res)

    return res
  }

  async saveTasks(tasksList: Array<any>, userID: string) {
    const user = await this.User.findOne({ id: userID }).exec()
    tasksList.map((item) => {
      if (!user?.tasks?.includes(item.id)) user?.tasks?.push(item.id)
    })

    await user?.save()
    return user
  }

  async getFinishedTasks(userID: string) {
    const user = await this.User.findOne({ id: userID }).exec()

    if (!user) return null

    const arrTasks = []
    if (user.tasks == null) return []

    for (let i = 0; i < user.tasks.length; i++) {
      const res = await this.Tasks.findOne({ id: user.tasks[i] })
      if (res != null) arrTasks.push(res)
    }
    return arrTasks
  }
}
