module.exports = [
  ['/api/goods', '/goods/goods/getPerList', 'get'],
  ['/api/goods/:id', '/goods/goods/getById', 'get'],
  ['/api/goods/:id', '/goods/goods/updateById', 'put'],
  ['/api/goods/:id', '/goods/goods/deleteById', 'delete'],
  ['/api/goods', '/goods/goods/create', 'post']
];
