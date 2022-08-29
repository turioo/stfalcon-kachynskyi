<template>
  <div class="form-wrapper">
    <div class="form-container">
      <form @submit.prevent="submit($event)">
        <div class="form-container__background">
          <img src="@/assets/img/form-bg.png" alt="background" />
        </div>
        <div class="form-container__title">Suggest your film</div>
        <div class="form-container__fields">
          <div class="input-field">
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.owner"
              placeholder="Owner"
            />
            <div
              class="input-errors"
              v-for="error of v$.form.owner.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="input-field">
            <input
              type="text"
              id="title"
              name="title"
              v-model="form.title"
              placeholder="Title"
            />
            <div
              class="input-errors"
              v-for="error of v$.form.title.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="input-field">
            <input
              type="text"
              id="director"
              name="director"
              v-model="form.director"
              placeholder="Director"
            />
            <div
              class="input-errors"
              v-for="error of v$.form.director.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="input-field">
            <input
              type="number"
              id="year"
              name="year"
              v-model="form.year"
              placeholder="Year"
            />
            <div
              class="input-errors"
              v-for="error of v$.form.year.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="input-field file">
            <label for="poster"
              ><svg
                width="12"
                height="19"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 4V12H7.5V4C7.5 2.34687 6.15312 1 4.5 1C2.84687 1 1.5 2.34687 1.5 4V13C1.5 14.1031 2.39688 15 3.5 15C4.60313 15 5.5 14.1031 5.5 13V4C5.5 3.45 5.05 3 4.5 3C3.95 3 3.5 3.45 3.5 4V12H2.5V4C2.5 2.89687 3.39687 2 4.5 2C5.60313 2 6.5 2.89687 6.5 4V13C6.5 14.6531 5.15312 16 3.5 16C1.84687 16 0.5 14.6531 0.5 13V4C0.5 1.79375 2.29375 0 4.5 0C6.70625 0 8.5 1.79375 8.5 4Z"
                  fill="#5E6379"
                />
              </svg>
              Choose photo</label
            >
            <input
              type="file"
              id="poster"
              name="poster"
              @change="handleImg($event)"
              accept="image/jpeg, image/jpg, image/png, image/pdf"
            />
            <div
              class="input-errors"
              v-for="error of v$.form.poster.$errors"
              :key="error.$uid"
            >
              <div class="error-msg" v-if="size">Size is more 5 MB</div>
              <div class="error-msg" v-else>{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <button class="form-container__button">Send</button>
      </form>
    </div>
  </div>
  <div class="thanks-popup" v-if="popup">
    <div class="thanks-popup__overlay"></div>
    <div class="thanks-popup__container">
      <div class="thanks-close" @click="popup = false">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M11.8323 10.0178L19.6199 2.22993C20.1267 1.72336 20.1267 0.904314 19.6199 0.397747C19.1133 -0.108819 18.2943 -0.108819 17.7877 0.397747L9.99989 8.18559L2.21229 0.397747C1.70548 -0.108819 0.88667 -0.108819 0.380103 0.397747C-0.126701 0.904314 -0.126701 1.72336 0.380103 2.22993L8.16771 10.0178L0.380103 17.8056C-0.126701 18.3122 -0.126701 19.1312 0.380103 19.6378C0.632556 19.8905 0.964494 20.0174 1.29619 20.0174C1.62789 20.0174 1.9596 19.8905 2.21229 19.6378L9.99989 11.85L17.7877 19.6378C18.0404 19.8905 18.3721 20.0174 18.7038 20.0174C19.0355 20.0174 19.3672 19.8905 19.6199 19.6378C20.1267 19.1312 20.1267 18.3122 19.6199 17.8056L11.8323 10.0178Z"
              fill="#333333"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="thanks-title">Thank you for your request!</div>
      <div class="thanks-subtitle">
        Your request has been successfully sent, wait, the manager will contact
        you
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
