<template>
  <div class="form-wrapper">
    <div class="form-container">
      <form @submit.prevent="submit($event)">
        <div class="form-container__background">
          <img src="@/assets/img/form-bg.png" alt="background" />
        </div>
        <div class="form-container__title">Suggest your film</div>
        <div class="form-container__fields">
          <div class="name-field">
            <input type="text" id="name" name="name" v-model="name" />
            <div
              class="input-errors"
              v-for="error of v$.name.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="phone-field">
            <input type="text" id="phone" name="phone" v-model="phone" />
            <div
              class="input-errors"
              v-for="error of v$.phone.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <button class="form-container__button">Відправити</button>
      </form>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
