<template>
<div class="center-preview" >
	<div class="title"
   :style='{"margin":"10px 0","fontSize":"20px","lineHeight":"54px","color":"#333","textAlign":"center",}'>{{ title }}</div>

    <el-tabs tab-position="left" :style='{"background":"none"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="150px">
          <el-form-item  v-if="userTableName=='yonghu'" label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="sessionForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='yonghu'" label="密码" prop="mima">
            <el-input type="password" v-model="sessionForm.mima" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='yonghu'" label="用户姓名" prop="yonghuxingming">
            <el-input v-model="sessionForm.yonghuxingming" placeholder="用户姓名" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='yonghu'" label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="headers"
              :show-file-list="false"
              :on-success="yonghutouxiangHandleAvatarSuccess">
              <img :style='{"border":"1px dashed #2886bc","cursor":"pointer","color":"#2886bc","borderRadius":"6px","textAlign":"center","width":"100px","fontSize":"32px","lineHeight":"100px","height":"100px"}' v-if="sessionForm.touxiang" :src="baseUrl + sessionForm.touxiang" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item  v-if="userTableName=='yonghu'" label="性别">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  v-if="userTableName=='yonghu'" label="手机号码" prop="shoujihaoma">
            <el-input v-model="sessionForm.shoujihaoma" placeholder="手机号码" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="供应商账号" prop="gongyingshangzhanghao">
            <el-input v-model="sessionForm.gongyingshangzhanghao" placeholder="供应商账号" readonly></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="密码" prop="mima">
            <el-input type="password" v-model="sessionForm.mima" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="供应商名称" prop="gongyingshangmingcheng">
            <el-input v-model="sessionForm.gongyingshangmingcheng" placeholder="供应商名称" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="负责人" prop="fuzeren">
            <el-input v-model="sessionForm.fuzeren" placeholder="负责人" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="联系电话" prop="lianxidianhua">
            <el-input v-model="sessionForm.lianxidianhua" placeholder="联系电话" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='gongyingshang'" label="供应商地址" prop="gongyingshangdizhi">
            <el-input v-model="sessionForm.gongyingshangdizhi" placeholder="供应商地址" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="配送账号" prop="peisongzhanghao">
            <el-input v-model="sessionForm.peisongzhanghao" placeholder="配送账号" readonly></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="密码" prop="mima">
            <el-input type="password" v-model="sessionForm.mima" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="配送姓名" prop="peisongxingming">
            <el-input v-model="sessionForm.peisongxingming" placeholder="配送姓名" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="headers"
              :show-file-list="false"
              :on-success="peisongyuantouxiangHandleAvatarSuccess">
              <img :style='{"border":"1px dashed #2886bc","cursor":"pointer","color":"#2886bc","borderRadius":"6px","textAlign":"center","width":"100px","fontSize":"32px","lineHeight":"100px","height":"100px"}' v-if="sessionForm.touxiang" :src="baseUrl + sessionForm.touxiang" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="性别">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="联系电话" prop="lianxidianhua">
            <el-input v-model="sessionForm.lianxidianhua" placeholder="联系电话" ></el-input>
          </el-form-item>
          <el-form-item  v-if="userTableName=='peisongyuan'" label="身份证号" prop="shenfenzhenghao">
            <el-input v-model="sessionForm.shenfenzhenghao" placeholder="身份证号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button 
            :style='{"border":"2px solid #2886bc","cursor":"pointer","padding":"0 35px","boxShadow":"inset 2px 0px 12px 0px #c2ddeb","margin":"0 20px 0 0","color":"#2886bc","outline":"none","borderRadius":"8px","background":"#fff","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button 
            :style='{"border":"2px solid #ccc","cursor":"pointer","padding":"0 35px","boxShadow":"inset 0px 0px 12px 0px #eee","margin":"0","color":"#999","outline":"none","borderRadius":"8px","background":"rgba(255, 255, 255, 1)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
		
      </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
  import config from '@/config/config'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
        rules: {},
        chongzhiForm: {
          money: '',
          radio: ''
        },
        disabled: false,
        dialogFormVisibleMoney: false,
        dialogFormVisibleVip: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('Token')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {}
      }
    },
    created() {
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'yonghuzhanghao', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'mima', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'yonghuxingming', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'touxiang', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'xingbie', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'shoujihaoma', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'sfsh', null);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.sessionForm, 'shhf', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'gongyingshangzhanghao', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'mima', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'gongyingshangmingcheng', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'fuzeren', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'lianxidianhua', null);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.sessionForm, 'gongyingshangdizhi', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'peisongzhanghao', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'mima', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'peisongxingming', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'touxiang', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'xingbie', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'lianxidianhua', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'shenfenzhenghao', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'sfsh', null);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.sessionForm, 'shhf', null);
      }

      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'yonghuzhanghao', [{ required: true, message: '请输入用户账号', trigger: 'blur' }]);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'yonghuxingming', [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]);
      }
			if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'shoujihaoma', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.rules, 'gongyingshangzhanghao', [{ required: true, message: '请输入供应商账号', trigger: 'blur' }]);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
      }
      if ('gongyingshang' == this.userTableName) {
        this.$set(this.rules, 'gongyingshangmingcheng', [{ required: true, message: '请输入供应商名称', trigger: 'blur' }]);
      }
			if ('gongyingshang' == this.userTableName) {
        this.$set(this.rules, 'lianxidianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.rules, 'peisongzhanghao', [{ required: true, message: '请输入配送账号', trigger: 'blur' }]);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
      }
      if ('peisongyuan' == this.userTableName) {
        this.$set(this.rules, 'peisongxingming', [{ required: true, message: '请输入配送姓名', trigger: 'blur' }]);
      }
			if ('peisongyuan' == this.userTableName) {
        this.$set(this.rules, 'lianxidianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
      }
			if ('peisongyuan' == this.userTableName) {
        this.$set(this.rules, 'shenfenzhenghao', [{ required: false, validator: this.$validate.isIdCard, trigger: 'blur' }]);
      }

      this.init();
      this.getSession();
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('peisongyuan' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
      getSession() {
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.sessionForm = res.data.data;
            localStorage.setItem('userid', res.data.data.id);
            if(res.data.data.vip) {
                localStorage.setItem('vip', res.data.data.vip);
            }
            if(res.data.data.touxiang) {
                localStorage.setItem('headportrait', res.data.data.touxiang);
            } else if(res.data.data.headportrait) {
                localStorage.setItem('headportrait', res.data.data.headportrait);
            }
          }
        });
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
              if (res.data.code == 0) {
                this.$message({
                  message: '更新成功',
                  type: 'success',
                  duration: 1500
                });
              }
            });
          } else {
            return false;
          }
        });
      },
      yonghutouxiangHandleAvatarSuccess(res, file) {
        if (res.code == 0) {
          if ('yonghu' == this.userTableName) {
            this.sessionForm.touxiang = 'upload/' + res.file;
          }
        }
      },
      peisongyuantouxiangHandleAvatarSuccess(res, file) {
        if (res.code == 0) {
          if ('peisongyuan' == this.userTableName) {
            this.sessionForm.touxiang = 'upload/' + res.file;
          }
        }
      },
      chongzhi() {
        if (this.chongzhiForm.money == '') {
          this.$message({
            message: '请输入充值金额',
            type: 'error',
            duration: 1500
          });
          return;
        }
        if (this.chongzhiForm.money <= 0) {
          this.$message({
            message: '请输入正确的充值金额',
            type: 'error',
            duration: 1500
          });
          return;
        }
        if (this.chongzhiForm.radio == '') {
          this.$message({
            message: '请选择充值方式',
            type: 'error',
            duration: 1500
          });
          return;
        }
        this.sessionForm.money = parseInt(this.sessionForm.money) + parseInt(this.chongzhiForm.money);
        this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: '充值成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                this.dialogFormVisibleMoney = false;
              }
            });
          }
        });
      },
      chongzhivip() {
        this.chongzhiForm.money == 199;
        if (this.chongzhiForm.radio == '') {
          this.$message({
            message: '请选择支付方式',
            type: 'error',
            duration: 1500
          });
          return;
        }
        if(this.sessionForm.vip == '是') {
          this.$message({
            message: '您已是我们的尊贵会员。',
            type: 'success',
            duration: 1500
          });
          return;
        }
        
        this.sessionForm.vip = "是"
        this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: '会员购买成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                localStorage.setItem('vip', this.sessionForm.vip);
                this.dialogFormVisibleVip = false;
              }
            });
          }
        });
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
        }

        this.title = event.target.outerText;
      },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & ::v-deep .el-tabs__header {
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header {
	padding: 20px;
	margin: 40px 0 0 7%;
	width: 250px;
	border-color: #eee;
	border-width: 0;
	position: relative;
	border-style: solid;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item {
  	border: 1px solid #eee;
  	padding: 0 20px;
  	margin: 10px 0;
  	color: #fff;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 54px;
  	transition: background 1s ease 0s;
  	border-radius: 30px;
  	background: none;
  	width: auto;
  	position: relative;
  	text-align: center;
  	height: 54px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item:hover {
  	border: 1px solid #2886bc;
  	padding: 0 20px;
  	margin: 10px 0;
  	color: #2886bc;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 54px;
  	position: relative;
  	text-align: center;
  	height: 54px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item.is-active {
  	border: 1px solid #2886bc;
  	border-radius: 30px;
  	padding: 0 20px;
  	margin: 10px 0;
  	color: #2886bc;
  	font-weight: 600;
  	font-size: 16px;
  	line-height: 54px;
  	position: relative;
  	text-align: center;
  	height: 54px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__content .el-tab-pane {
  	padding: 60px 0 30px;
  	margin: 40px 7% 0 ;
  	width: 86%;
  }
  
  .center-preview-pv .el-form-item ::v-deep .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #2886bc;
  	font-weight: 500;
  	width: 150px;
  	font-size: 16px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 150px;
  }
  
  .center-preview-pv .el-input ::v-deep .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 30px;
  	padding: 0 10px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #333;
  	width: 360px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select ::v-deep .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 30px;
  	padding: 0 10px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #333;
  	width: 360px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor ::v-deep .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 30px;
  	padding: 0 10px 0 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #333;
  	width: 360px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv ::v-deep .avatar-uploader-icon {
  	border: 1px dashed #2886bc;
  	cursor: pointer;
  	border-radius: 6px;
  	color: #2886bc;
  	width: 100px;
  	font-size: 32px;
  	line-height: 100px;
  	text-align: center;
  	height: 100px;
  }
  
  .center-preview-pv .el-form-item.balance ::v-deep .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 30px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #333;
  	display: inline-block;
  	width: auto;
  	font-size: 14px;
  	height: 40px;
  }
</style>
