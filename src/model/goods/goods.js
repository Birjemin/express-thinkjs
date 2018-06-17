class GoodsModel extends think.Model {
  async getList(params = {}) {
    let lists = await this.model('good').where(params).select();
    return lists;
  }
  // get per lists
  async getPerList(params = {}, nowPage = 1, perPage = 6) {
    let lists = await this.model('good').where(params).page(nowPage, perPage).countSelect();
    return lists;
  }
  // find by id
  async fingById(id) {
    let goods = await this.model('good').where({id: id}).find();
    return goods;
  }
  // find by name
  async findByName(name) {
    let goods = await this.model('good').where({name: name}).find();
    return goods;
  }
  // update by id
  async updateById(id, params) {
    let result = await this.model('good').where({id: id}).update(params);
    return result;
  }
  // add
  async add(params) {
    let result = await this.model('good').add(params);
    return result;
  }
  // delete by id
  async deleteById(id) {
    let result = await this.model('good').where({id: id}).delete();
    return result;
  }
  // create
  async create(params) {
    let result = await this.model('good').add(params);
    return result;
  }
}
export default GoodsModel;
