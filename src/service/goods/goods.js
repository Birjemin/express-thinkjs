class GoodsService extends think.Service {
  async create(params) {
    let goods = await this.model('goods/goods').findByName(params.name);
    // 有属性，不为空
    if (this.isEmpty(goods)) {
      think.logger.info('[create]search info if exsit: ', [JSON.stringify(goods)]);
      return false;
    }
    let res = await this.model('goods/goods').create(params);
    return res;
  }
}

export default GoodsService;
