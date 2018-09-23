<template>
    <div>
        <Header>
            <h2 slot="title">The sum is: </h2>
            <h2 slot="sum" :class="sumClass">{{ sum }}</h2>
        </Header>
        <div>
            <button @click="this.increment">+</button>
            <button @click="this.decrement">-</button>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    components: { Header },
    name: 'Counter',
    data: () => {
        return { sum: 0 };
    },
    methods: {
        increment() {
            return this.sum++;
        },
        decrement() {
            return this.sum--;
        },
    },
    computed: {
        sumClass() {
            if(this.sum === 0) return this.sumClassName = 'gray';
            if(this.sum < 0) return this.sumClassName = 'red';
            if(this.sum > 0) return this.sumClassName = 'green';
        },
    },
}
</script>

<style scoped>
    .green {
        color:green;
    }
    .red {
        color: red;
    }
    .gray {
        color: gray;
    }
    h2 {
        display: inline;
    }
</style>
