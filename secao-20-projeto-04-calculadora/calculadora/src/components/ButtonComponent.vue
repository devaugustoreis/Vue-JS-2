<template>
    <button class="btn"
        @click="$emit('customBtnClick', label)"
        :class="{ double, triple, operation }">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888; 
}

.btn {
    font-size: 1.4rem;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.btn:active {
    background-color: #ccc;
}

.btn.double {
    grid-column: span 2;
}

.btn.triple {
    grid-column: span 3;
}

.btn.operation {
    background-color: #e6770f;
    color: #fff;
}

.btn.operation:active {
    background-color: #d16b0bcc;
    color: #fff;
}
</style>