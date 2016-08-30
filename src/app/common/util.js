/*
 * 生成二维码，转化成UTF-8
 * */

function toUtf8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
  }
  return out;
}


/*
 * 上传LOGO预览
 * */

//建立一個可存取到該file的url
function getObjectURL(file) {
  var url = null;
  if (window.createObjectURL != undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}


/*
 * json转化成字符串
 * */
function json2str(o) {
  var arr = [];

  var fmt = function (s) {
    if (typeof s == 'object' && s != null) return json2str(s);
    return /^(string|number)$/.test(typeof s) ? '"' + s + '"' : s;
  };
  for (var i in o) arr.push('"' + i + '":' + fmt(o[i]));
  return ('{' + arr.join(',') + '}');
}


/*

 * 时间戳转化日期

 * */

function translateToDate(uData) {

  var myDate = new Date(uData * 1000);

  var year = myDate.getFullYear();

  var month = myDate.getMonth() + 1;

  var day = myDate.getDate();

  return year + '-' + month + '-' + day;
}


//处理错误码
function errorTip(data) {
  if (data) {
    if (data.code == 223 || data.code == 219) {
      window.sessionStorage.removeItem('access_token');
      window.sessionStorage.removeItem('loginEmail');
      window.sessionStorage.removeItem('role');
      window.sessionStorage.removeItem('loginId');
      window.sessionStorage.removeItem('merchant_object_id');
      window.sessionStorage.removeItem('appid');
      window.sessionStorage.removeItem('member_privilege');
      window.sessionStorage.removeItem('branch_privilege');
      window.sessionStorage.removeItem('business_privilege');
      window.sessionStorage.removeItem('is_role');
      window.sessionStorage.removeItem('templateType');
      window.location.href = '#/user/token/fail';
    }
    if (data.code == 403) {
      alert("你没有权限申请,数量不足！");
    }
  }
}
//判断access_token用户标识

function haveAccessToken(access_token) {
  if (access_token == null) {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('loginEmail');
    window.sessionStorage.removeItem('loginId');
    window.sessionStorage.removeItem('role');
    window.sessionStorage.removeItem('merchant_object_id');
    window.sessionStorage.removeItem("member_privilege");
    window.sessionStorage.removeItem('branch_privilege');
    window.sessionStorage.removeItem('business_privilege');
    window.sessionStorage.removeItem('appid');
    window.sessionStorage.removeItem('is_role');
    window.sessionStorage.removeItem('templateType');
    window.location.href = '#/index';
  }
}

//转换卡券类型
function cardTypeConversion(data) {
  if (data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].card_type == "DISCOUNT") {
        data[i].card_type = "折扣券";
      } else if (data[i].card_type == "CASH") {
        data[i].card_type = "代金券";
      } else if (data[i].card_type == "GIFT") {
        data[i].card_type = "礼品券";
      } else if (data[i].card_type == "GENERAL_COUPON") {
        data[i].card_type = "优惠券";
      }
    }
  }

}


//转换卡券类型 没有for循环
function cardToTypeConversion(data) {
  if (data) {
    if (data.card_type == "DISCOUNT") {
      data.card_type = "折扣券";
    } else if (data.card_type == "CASH") {
      data.card_type = "代金券";
    } else if (data.card_type == "GIFT") {
      data.card_type = "礼品券";
    } else if (data.card_type == "GENERAL_COUPON") {
      data.card_type = "优惠券";
    }
  }
  if (data.can_share == 1) {
    data.can_share = "卡券可分享";
  } else {
    data.can_share = "卡券不可分享";
  }

  if (data.can_give_friend == 1) {
    data.can_give_friend = "卡券可转载";
  } else {
    data.can_give_friend = "卡券不可转载";
  }
}
/*
 * 加载进度条
 * */
function loadingProgressBar($scope, ngProgressFactory, $timeout) {
  $scope.progressbar = ngProgressFactory.createInstance();
  $scope.progressbar.start();
  $timeout($scope.progressbar.complete(), 2000);
  $scope.progressbar.setColor('#103754');
  $scope.progressbar.setHeight('3px');
}

//错误alert弹窗
function showAlertResultError() {
  $('#myAlertModel').modal('hide');
}


//输入框长度charCodeAt效验
function charCodeInput(cardInputValue, inputLength, resultData) {
  $('#' + cardInputValue).bind('input propertychange blur', function () {
    var val = $(this).val();
    var len = 0;
    for (var i = 0; i < val.length; i++) {
      if (val.charCodeAt(i) > 255) {
        len += 1;
      } else {
        len += 0.5;
      }
    }
    if (len == inputLength) {
      $("#" + cardInputValue).attr("maxlength", len);
    }

    if (len == 0) {
      $("#" + cardInputValue).attr("maxlength", '');
    }


    $('#' + resultData).html(len);
  });
}

