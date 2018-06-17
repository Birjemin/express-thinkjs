import Base from './../base.js';
class GoodsController extends Base {
  /**
   * @api {get} /api/goods 获取全部详情
   * @apiName getList
   * @apiGroup Goods
   * @apiDescription 获取全部goods的list
   *
   * @apiParam {string} [name] Goods的名称
   * @apiParam {int} [price] Goods的价格
   * @apiParam {int} [page] page=1
   * @apiSuccessExample {json} 成功
   * {
   *    "errno": 0,
   *    "errmsg": "",
   *    "data": {
   *        "count": 2,
   *        "totalPages": 1,
   *        "pageSize": 6,
   *        "currentPage": 1,
   *        "data": [
   *            {
   *                "id": 1,
   *                "name": "啊哈哈",
   *                "desc": "啊哈哈",
   *                "price": 10,
   *                "sum": 10,
   *                "created_at": 1525607223
   *            }
   *        ]
   *    }
   * }
   */
  async getPerListAction() {
    // 官网没有提供一个logic过滤后字段的方法
    let nowPage = this.get('page');
    let name = this.get('name');
    let price = this.get('price');
    let params = {};
    if (typeof (name) !== 'undefined') {
      params = Object.assign(params, {name: name});
    }
    if (typeof (price) !== 'undefined') {
      params = Object.assign(params, {price: price});
    }
    let list = await this.model('goods/goods').getPerList(params, nowPage);
    return this.success(list);
  }

  /**
   * @api {get} /api/goods/:id 通过id获取goods详情
   * @apiName findById
   * @apiGroup Goods
   * @apiDescription 获取某一条的id
   *
   * @apiSuccessExample {json} 成功
   * {
   *     "errno": 0,
   *     "errmsg": "",
   *     "data": {
   *         "id": 119,
   *         "name": "567",
   *         "desc": "全世界最好吃的苹果",
   *         "price": 12,
   *         "sum": 115,
   *         "created_at": 1525607223
   * }
   */
  async getByIdAction() {
    let id = this.get('id');
    let goods = await this.model('goods/goods').fingById(id);
    return this.success(goods);
  }

  /**
   * @api {put} /api/goods/:id 通过id更新goods详情
   * @apiName updateById
   * @apiGroup Goods
   * @apiDescription 通过id更新goods
   *
   * @apiParam {string} [name] Goods的名称
   * @apiParam {string} [desc] Goods的描述
   * @apiParam {int} [price] Goods的价格
   * @apiParam {int} [sum] Goods的总和
   *
   * @apiSuccessExample {json} 成功
   * {
   *     "code": 0,
   *     "message": "",
   *     "data": {
   *         "result": true
   * }
   */
  async updateByIdAction() {
    let id = this.get('id');
    let name = this.post('name');
    let desc = this.post('desc');
    let price = this.post('price');
    let sum = this.post('sum');
    let params = {};
    if (typeof (name) !== 'undefined') {
      params = Object.assign(params, {name: name});
    }
    if (typeof (desc) !== 'undefined') {
      params = Object.assign(params, {desc: desc});
    }
    if (typeof (price) !== 'undefined') {
      params = Object.assign(params, {price: price});
    }
    if (typeof (sum) !== 'undefined') {
      params = Object.assign(params, {sum: sum});
    }
    let result = await this.model('goods/goods').updateById(id, params);
    return this.success({result: Boolean(result)});
  }

  /**
   * @api {post} /api/goods 增加goods
   * @apiName create
   * @apiGroup Goods
   * @apiDescription 增加goods
   *
   * @apiParam {string} [name] Goods的名称
   * @apiParam {string} [desc] Goods的描述
   * @apiParam {int} [price] Goods的价格
   * @apiParam {int} [sum] Goods的总和
   *
   * @apiSuccessExample {json} 成功
   * {
   *     "code": 0,
   *     "message": "",
   *     "data": {
   *         "result": true
   * }
   */
  async createAction() {
    let name = this.post('name');
    let desc = this.post('desc');
    let price = this.post('price');
    let sum = this.post('sum');
    let params = {
      name: name,
      desc: desc,
      price: price,
      sum: sum,
      created_at: this.genrateNowTime()
    };
    let result = await think.service('goods/goods').create(params);
    return (result === false) ? this.success({result: false}) : this.success({result: true});
  }

  /**
   * @api {delete} /api/goods/:id 通过id删除goods
   * @apiName deleteById
   * @apiGroup Goods
   * @apiDescription 通过id删除goods
   *
   * @apiSuccessExample {json} 成功
   * {
   *     "code": 0,
   *     "message": "",
   *     "data": {
   *         "result": true
   * }
   */
  async deleteByIdAction() {
    let id = this.get('id');
    let result = await this.model('goods/goods').deleteById(id);
    return this.success({result: Boolean(result)});
  }
}
export default GoodsController;
