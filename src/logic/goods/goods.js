class GoodsLogic extends think.Logic {
  getPerListAction() {
    let rules = {
      name: {
        string: true,
        required: false,
        trim: true,
        method: 'get'
      },
      price: {
        int: true,
        required: false,
        trim: true,
        method: 'get'
      },
      page: {
        int: true,
        required: false,
        default: 1,
        trim: true,
        method: 'get'
      }
    };
    // 自定义的错误信息
    let msgs = {
      name: 'name不合法',
      price: 'price不合法'
    };
    this.allowMethods = 'get';
    if (!this.validate(rules, msgs)) {
      return this.fail('条件不合法', this.validateErrors);
    }
  }

  getByIdAction() {
    let rules = {
      id: {
        int: true,
        required: true,
        trim: true,
        method: 'get'
      }
    };

    let msgs = {
      id: 'id必须存在且为数字'
    };

    this.allowMethods = 'get';
    if (!this.validate(rules, msgs)) {
      return this.fail('条件不合法', this.validateErrors);
    }
  }

  updateByIdAction() {
    let rules = {
      id: {
        int: true,
        required: true,
        trim: true,
        method: 'get'
      },
      name: {
        string: true,
        required: false,
        trim: true,
        method: 'put'
      },
      desc: {
        string: true,
        required: false,
        trim: true,
        method: 'put'
      },
      price: {
        int: true,
        required: false,
        trim: true,
        method: 'put'
      },
      sum: {
        int: true,
        required: true,
        trim: true,
        method: 'put'
      }
    };
    // 自定义的错误信息
    let msgs = {
      id: 'id不合法',
      name: 'name不合法',
      desc: 'desc不合法',
      price: 'price不合法',
      sum: 'sum不合法'
    };
    this.allowMethods = 'put';
    if (!this.validate(rules, msgs)) {
      return this.fail('条件不合法', this.validateErrors);
    }
  }

  deleteByIdAction() {
    let rules = {
      id: {
        int: true,
        required: true,
        trim: true,
        method: 'get'
      }
    };
    // 自定义的错误信息
    let msgs = {
      id: 'id不合法'
    };
    this.allowMethods = 'delete';
    if (!this.validate(rules, msgs)) {
      return this.fail('条件不合法', this.validateErrors);
    }
  }

  createAction() {
    let rules = {
      name: {
        string: true,
        required: true,
        trim: true,
        method: 'post'
      },
      desc: {
        string: true,
        required: false,
        trim: true,
        default: '',
        method: 'post'
      },
      price: {
        int: true,
        required: true,
        trim: true,
        method: 'post'
      },
      sum: {
        int: true,
        required: true,
        trim: true,
        method: 'post'
      }
    };
    // 自定义的错误信息
    let msgs = {
      name: 'name不合法',
      desc: 'desc不合法',
      price: 'price不合法',
      sum: 'sum不合法'
    };
    this.allowMethods = 'post';
    if (!this.validate(rules, msgs)) {
      return this.fail('条件不合法', this.validateErrors);
    }
  }
}
export default GoodsLogic;
