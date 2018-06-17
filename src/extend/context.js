module.exports = {
  // isMobile
  isMobile() {
    const userAgent = this.userAgent.toLowerCase();
    const mList = ['iphone', 'android'];
    return mList.some(item => userAgent.indexOf(item) > -1);
  },
  // isEmpty
  isEmpty(list) {
    return (Object.keys(list).length > 0);
  },
  // create timestamp
  genrateNowTime() {
    return Math.floor(Number(new Date()) / 1000);
  },
  // filter undefined
  filterUndefined(list) {
    let params = {};
    for (let [key, val] of list) {
      if (typeof (val) === 'undefined') {
        continue;
      }
      params[key] = val;
    }
    think.logger.info('[filterUndefined]filter result is: ', [JSON.stringify(params)]);
    return params;
  }
};
