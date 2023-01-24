<script setup>
import { useAuthStore } from '~~/store/auth';
const { user, userSignOut } = useFirebaseAuth();
const authStore = useAuthStore();
</script>

<template>
  <nav class="container mx-auto flex justify-between bg-white p-4">
    <NuxtLink to="/" class="flex items-center">
      <span
        class="self-center whitespace-nowrap text-xl font-semibold text-sky-500"
        >Wardrobe</span
      >
    </NuxtLink>
    <div class="hidden items-center space-x-8 lg:flex">
      <NuxtLink to="/shop" class="font-semibold">
        <ClientOnly>
          <font-awesome-icon class="mx-auto w-8 pt-2" :icon="['fas', 'shop']" />
        </ClientOnly>
        <span>商品</span>
      </NuxtLink>
      <NuxtLink to="/cart" class="font-semibold">
        <ClientOnly>
          <font-awesome-icon
            class="mx-auto w-8 pt-2"
            :icon="['fas', 'cart-shopping']"
          />
        </ClientOnly>
        <span>購物車</span>
      </NuxtLink>

      <div class="group relative" v-if="user">
        <div
          class="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-600"
        >
          <span class="font-medium text-gray-300">{{
            String(user.email).slice(0, 1)
          }}</span>
          <span
            class="absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400"
          ></span>
        </div>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="absolute bottom-0 right-0 z-10 hidden w-44 translate-y-full divide-y divide-gray-100 rounded bg-gray-700 shadow group-hover:block"
        >
          <ul
            class="py-1 text-sm text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <NuxtLink
                to="/admin"
                class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
              >
                ˋ進入管理後台
              </NuxtLink>
            </li>

            <li>
              <a
                class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
                @click="userSignOut"
              >
                登出
              </a>
            </li>
          </ul>
        </div>
      </div>

      <NuxtLink v-else to="/login" class="font-semibold">
        <ClientOnly>
          <font-awesome-icon
            class="mx-auto w-8"
            :icon="['fas', 'right-to-bracket']"
          />
        </ClientOnly>
        <span>登入</span></NuxtLink
      >
    </div>
    <div class="group relative flex lg:hidden">
      <div class="space-y-2">
        <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>
      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="absolute right-0 bottom-0 z-10 hidden w-44 translate-y-full divide-y divide-gray-100 rounded bg-gray-700 shadow group-hover:block"
      >
        <ul
          class="py-1 text-sm text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li v-if="user">
            <span
              class="block cursor-default overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
            >
              你好, {{ user?.email }}
            </span>
          </li>
          <li>
            <NuxtLink
              to="/shop"
              class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
            >
              商品
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/cart"
              class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
            >
              ˋ購物車
            </NuxtLink>
          </li>
          <template v-if="user">
            <li>
              <NuxtLink
                to="/admin"
                class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
              >
                ˋ進入管理後台
              </NuxtLink>
            </li>

            <li>
              <a
                class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
                @click="userSignOut"
              >
                登出
              </a>
            </li>
          </template>
          <li v-else>
            <NuxtLink
              to="/login"
              class="block px-4 py-2 text-center font-semibold hover:bg-gray-600 hover:text-white"
            >
              登入
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
