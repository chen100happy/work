(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(w5cValidatorProvider) {

    window.app = angular.module('app');

    //全局配置
    w5cValidatorProvider.config({

      blurTrig: true,
      showError: true,
      removeError: true
    });
    w5cValidatorProvider.setRules({

      //注册配置

      registerEmail: {

        required: '邮箱不能为空',

        email: '邮箱地址格式不正确'
      },
      registerPwd: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },
      //name="update_password"
      update_password: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },
      update_again_password: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },
      zhekouedu: {
        pattern: '只能输入1-9.9数字'
      },
      Remarks: {
        required: '备注不能为空'
      },
      PromotionQuota: {
        min: '输入不低于50元数字'
      },
      PromotionBid: {
        pattern: '输入不低于0.50-20元数字'
      },

      telephone: {
        pattern: '输入正确的号码格式',
        required: '客服电话不能为空'
      },

      telephone_staff: {
        pattern: '输入正确的号码格式'
      },

      guTelephone: {
        pattern: '输入正确的号码格式',
        required: '客服电话不能为空'
      },
      createRedMon: {
        url: 'url格式不正确'
      },

      registerConfirmPwd: {
        required: '密码不能为空',
        repeat: '密码不一致',
        pattern: '用户名不允许空格以及汉字'
      },


      registerVerifyImg: {
        required: '验证码不能为空'
      },

      //更改密码配置

      password_old: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },

      password_new: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },

      verifyPwd: {
        required: '密码不能为空',
        repeat: '密码不一致',
        pattern: '用户名不允许空格以及汉字'
      },
      //找回密码配置
      pwd: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },
      confirm_pwd: {
        required: '密码不能为空',
        pattern: '用户名不允许空格以及汉字',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16'
      },
      //新增beacon
      addBeaconMac: {

        required: 'MAC不能为空',

        pattern: 'MAC格式不正确'

      },
      uuid: {
        pattern: 'UUID格式不正确'
      },
      major: {
        pattern: '请输入0-65535之间的正整数'

      },
      minor: {
        pattern: '请输入0-65535之间的正整数'

      },


      //新增巡检人


      inspector_name: {
        required: '姓名不能为空'
      },


      inspector_email: {
        required: '邮箱不能为空',
        email: '邮箱地址格式不正确'
      },


      inspector_password: {
        required: '初始密码不能为空',
        minlength: '密码长度不能小于6',
        maxlength: '密码长度不能大于16',
        pattern: '密码不可以包含空格'
      },


      inspector_mobile: {
        maxlength: '密码长度不能大于11'
      },

      //申请设备
      applyDeviceNum: {
        pattern: '请输入0-99999之间的数字',
        number: '请输入数字',
        min: '设备数量不能小于1',
        required: '设备数量不能为空'
      },
      applyDeviceReason: {
        required: '申请理由不能为空'
      },

      //卡券
      brand_name: {
        required: '商户名字不能为空'
      },
      color: {
        required: '卡券颜色不能为空'
      },
      discount: {
        required: '折扣额度不能为空',
        pattern: '只能输入1-9.9数字'
      },
      titleDiscount: {
        required: '折扣券标题不能为空'
      },
      reduce_cost: {
        required: '减免金额不能为空'
      },
      least_cost: {
        required: '抵扣条件不能为空'
      },
      titleLeastCost: {
        required: '代金券标题不能为空'
      },
      couponTitle: {
        required: '优惠券标题不能为空'
      },

      caoPrompt: {
        required: '操作提示不能为空'
      },
      termsDescription: {
        required: '使用须知不能为空'
      },
      //新增页面

      mainTitle: {
        required: '主标题不能为空'
      },
      subTitle: {
        required: '副标题不能为空'
      },
      skipToUrl: {
        required: 'URL不能为空',
        url: 'url格式不正确',
        pattern: 'url格式不正确'
      },
      mch_name: {
        required: '商户名不能为空'
      },
      activation_name: {
        required: '活动名不能为空'
      },
      activation_description: {
        required: '活动描述不能为空'
      },

    });
  }

})();
