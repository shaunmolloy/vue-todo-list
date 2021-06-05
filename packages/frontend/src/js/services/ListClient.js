import BaseClient from './BaseClient';

export default class ListClient extends BaseClient {
  async getLists() {
    return super.get(`${this.domain}/lists`);
  }

  async addList(payload) {
    return super.add(`${this.domain}/lists`, {
      body: JSON.stringify(payload),
    });
  }

  async updateList(id, payload) {
    return super.update(`${this.domain}/lists/${id}`, {
      body: JSON.stringify(payload),
    });
  }

  async deleteList(id) {
    return super.delete(`${this.domain}/lists/${id}`);
  }
}
