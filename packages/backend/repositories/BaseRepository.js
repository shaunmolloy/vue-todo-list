module.exports = class BaseRepository {
  /**
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @param {*} object
   */
  create(object) {
    return (new this.model(object)).save();
  }

  async findAll() {
    return this.model.findAll();
  }

  /**
   * @param {Number} id
   */
  async findById(id) {
    return this.model.findByPk(id);
  }

  /**
   * @param {Number} id
   */
  async deleteById(id) {
    const model = await this.findById(id);
    if (model === null) {
      throw new Error('Not found');
    }
    return model.destroy();
  }

  /**
   * @param {Number} id
   * @param {*} object
   */
  async updateById(id, object) {
    const model = await this.findById(id);
    if (model === null) {
      throw new Error('Not found');
    }
    Object.keys(object).forEach((key) => {
      model[key] = object[key];
    });
    return model.save();
  }
}
