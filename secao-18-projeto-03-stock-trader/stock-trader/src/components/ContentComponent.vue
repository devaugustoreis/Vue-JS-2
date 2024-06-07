<template>
    <div class="content">
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.content {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding-top: 20px;
    justify-content: center;
}

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
    margin-top: -20px;
	transition: 0.3s;
}

.fade-enter-to {
    margin-top: 0px;
}

.fade-leave {
    margin-top: 0px;
	opacity: 1;
}

.fade-leave-active {
	transition: 0.3s;
}

.fade-leave-to {
    margin-top: -20px;
	opacity: 0;
}
</style>
