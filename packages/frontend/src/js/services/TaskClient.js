import BaseClient from './BaseClient';

export default class TaskClient extends BaseClient {
  async getTasks() {
    return super.get(`${this.domain}/tasks`);
  }

  async addTask(payload) {
    return super.add(`${this.domain}/tasks`, {
      body: JSON.stringify(payload),
    });
  }

  async updateTask(id, payload) {
    return super.update(`${this.domain}/tasks/${id}`, {
      body: JSON.stringify(payload),
    });
  }

  async deleteTask(id) {
    return super.delete(`${this.domain}/tasks/${id}`);
  }
}
