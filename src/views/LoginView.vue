<template>
    <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50 md:p-8 lg:p-12 relative overflow-hidden">
        <!-- Background Elements -->
        <div
            class="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob">
        </div>
        <div
            class="absolute top-0 -right-40 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute -bottom-40 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000">
        </div>

        <div
            class="w-full max-w-6xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[600px]">

            <!-- Left Side: Login Form -->
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <router-link to="/"
                    class="absolute top-8 left-8 text-gray-400 hover:text-gray-600 transition flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clip-rule="evenodd" />
                    </svg>
                    Back
                </router-link>

                <div class="max-w-md mx-auto w-full mt-8 md:mt-0">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Welcome back</h2>
                    <p class="text-gray-500 mb-8">Step into our shopping metaverse for an unforgettable shopping
                        experience</p>

                    <form @submit.prevent="handleLogin" class="space-y-6">
                        <div>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input type="email" placeholder="Email"
                                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
                                    required />
                            </div>
                        </div>

                        <div>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="password" placeholder="Password"
                                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
                                    required />
                            </div>
                        </div>

                        <button type="submit"
                            class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-200 transform hover:-translate-y-0.5 cursor-pointer">
                            Login
                        </button>
                    </form>

                    <p class="mt-8 text-center text-sm text-gray-500">
                        Don't have an account?
                        <router-link to="/register" class="text-purple-600 font-bold hover:underline">Sign
                            up</router-link>
                    </p>
                </div>
            </div>

            <!-- Right Side: Visual -->
            <div
                class="hidden md:flex w-1/2 relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 items-center justify-center p-12 overflow-hidden">
                <!-- Abstract Shape SVG -->
                <div class="relative z-10 transform hover:scale-105 transition duration-700">
                    <div class="w-80 h-80 relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse">
                        </div>
                        <!-- SVG Abstract Shape -->
                        <img src="../assets/imgs/login.png" alt="Login">
                    </div>
                </div>

                <div class="absolute bottom-12 left-0 right-0 text-center">
                    <h1
                        class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 tracking-tight">
                        Super Mart</h1>

                </div>

                <!-- Decorative background circles -->
                <div
                    class="absolute top-1/4 right-1/4 w-24 h-24 bg-white rounded-full mix-blend-overlay opacity-50 blur-xl">
                </div>
                <div
                    class="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply opacity-50 blur-2xl">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const handleLogin = () => {
    // Simulate login
    setTimeout(() => {
        toast.success("Welcome back!", {
            timeout: 2000
        });
        router.push('/')
    }, 1000)
}
</script>

<style scoped>
.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}
</style>
