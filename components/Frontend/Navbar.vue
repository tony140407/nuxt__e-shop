<script setup>
const { user, userSignOut } = useFirebaseAuth()
</script>

<template>
    <nav class="container mx-auto flex justify-between bg-white px-4 py-8">
        <NuxtLink to="/" class="flex items-center">
            <span class="self-center whitespace-nowrap text-xl font-semibold text-sky-500"
                >Wardrobe</span
            >
        </NuxtLink>
        <div class="hidden items-center space-x-8 lg:flex">
            <NuxtLink to="/shop" class="font-semibold"> 商品 </NuxtLink>
            <NuxtLink to="/cart" class="font-semibold"> 購物車 </NuxtLink>

            <div class="group relative" v-if="user">
                <div
                    class="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600"
                >
                    <span class="font-medium text-gray-600 dark:text-gray-300">{{
                        String(user.email).slice(0, 1)
                    }}</span>
                    <span
                        class="absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"
                    ></span>
                </div>
                <!-- Dropdown menu -->
                <div
                    id="dropdown"
                    class="absolute bottom-0 right-0 z-10 hidden w-44 translate-y-full divide-y divide-gray-100 rounded bg-white shadow group-hover:block dark:bg-gray-700"
                >
                    <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li>
                            <NuxtLink
                                to="/admin"
                                class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                ˋ進入管理後台
                            </NuxtLink>
                        </li>

                        <li>
                            <a
                                class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="userSignOut"
                            >
                                登出
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <NuxtLink v-else to="/login" class="font-semibold">登入</NuxtLink>
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
                class="absolute right-0 bottom-0 z-10 hidden w-44 translate-y-full divide-y divide-gray-100 rounded bg-white shadow group-hover:block dark:bg-gray-700"
            >
                <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                >
                    <li>
                        <NuxtLink
                            to="/shop"
                            class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            商品
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/cart"
                            class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            ˋ購物車
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/admin"
                            class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            ˋ進入管理後台
                        </NuxtLink>
                    </li>

                    <li>
                        <a
                            class="block px-4 py-2 text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            @click="userSignOut"
                        >
                            登出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
