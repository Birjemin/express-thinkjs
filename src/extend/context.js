class Helper {
  // isMobile
  isMobile() {
    const userAgent = this.userAgent.toLowerCase();
    const mList = ['iphone', 'android'];
    return mList.some(item => userAgent.indexOf(item) > -1);
  }
  // isEmpty
  isEmpty(list) {
    return Object.keys(list).length > 0;
  }
  // create timestamp
  genrateNowTime() {
    return Math.floor(Number(new Date()) / 1000);
  }
}

export default Helper;
