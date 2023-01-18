<template>
    <aside class="group w-10 hover:w-64 lg:w-64" aria-label="Sidebar">
        <div
            class="relative h-full overflow-y-auto rounded bg-gray-800 px-3 py-4 after:absolute after:top-4 after:right-2 after:rounded-full after:font-extrabold after:text-white after:content-['>'] group-hover:after:hidden lg:after:hidden"
        >
            <ul class="hidden space-y-3 group-hover:block lg:block">
                <li>
                    <a
                        href="#"
                        class="flex items-center rounded-lg bg-gray-800 p-2 text-base font-normal text-white hover:bg-gray-600"
                    >
                        <svg
                            aria-hidden="true"
                            class="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">產品管理</span>
                        <span
                            class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-900 p-3 text-sm font-medium text-blue-200"
                            >3</span
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center rounded-lg bg-gray-800 p-2 text-base font-normal text-white hover:bg-gray-600"
                    >
                        <svg
                            aria-hidden="true"
                            class="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                            ></path>
                            <path
                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                            ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">訂單管理</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center rounded-lg bg-gray-800 p-2 text-base font-normal text-white hover:bg-gray-600"
                    >
                        <svg
                            aria-hidden="true"
                            class="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">返回首頁</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center rounded-lg bg-gray-800 p-2 text-base font-normal text-white hover:bg-gray-600"
                    >
                        <svg
                            aria-hidden="true"
                            class="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="ml-3 flex-1 whitespace-nowrap">登出</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
