<template>
  <div class="layout">
    <!-- 顶部logo -->
    <div class="header_tit">
      <em class="milogo"></em>
      <h4 class="header_tit_txt">小米账号登陆</h4>
    </div>
    <div>
      <label class="login_user">
        <div class="country_list">
          <div class="countrycode_selector">
            <span class="country_code">
              <tt class="countrycode_value">+86</tt>
              <i class="icon_arrow_down"></i>
            </span>
          </div>
        </div>
        <input
          type="text"
          class="item_account"
          autocomplete="off"
          :placeholder="placeholderTxt"
          v-model.trim="username"
          @input="clearErr"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>