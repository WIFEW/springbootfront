export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","审核"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除"],"menu":"供应商","menuJump":"列表","tableName":"gongyingshang"}],"menu":"供应商管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除","审核"],"menu":"配送员","menuJump":"列表","tableName":"peisongyuan"}],"menu":"配送员管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"物资分类","menuJump":"列表","tableName":"wuzifenlei"}],"menu":"物资分类管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除","审核"],"menu":"物资信息","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"物资购买","menuJump":"列表","tableName":"wuzigoumai"}],"menu":"物资购买管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除"],"menu":"物资配送","menuJump":"列表","tableName":"wuzipeisong"}],"menu":"物资配送管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除","审核"],"menu":"健康上传","menuJump":"列表","tableName":"jiankangshangchuan"}],"menu":"健康上传管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","物资购买"],"menu":"物资信息列表","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","支付"],"menu":"物资购买","menuJump":"列表","tableName":"wuzigoumai"}],"menu":"物资购买管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"物资配送","menuJump":"列表","tableName":"wuzipeisong"}],"menu":"物资配送管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","物资购买"],"menu":"物资信息列表","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"物资信息","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看"],"menu":"物资购买","menuJump":"列表","tableName":"wuzigoumai"}],"menu":"物资购买管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"物资配送","menuJump":"列表","tableName":"wuzipeisong"}],"menu":"物资配送管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","物资购买"],"menu":"物资信息列表","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"供应商","tableName":"gongyingshang"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","配送"],"menu":"物资购买","menuJump":"列表","tableName":"wuzigoumai"}],"menu":"物资购买管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"物资配送","menuJump":"列表","tableName":"wuzipeisong"}],"menu":"物资配送管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看"],"menu":"健康上传","menuJump":"列表","tableName":"jiankangshangchuan"}],"menu":"健康上传管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","物资购买"],"menu":"物资信息列表","menuJump":"列表","tableName":"wuzixinxi"}],"menu":"物资信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"配送员","tableName":"peisongyuan"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
