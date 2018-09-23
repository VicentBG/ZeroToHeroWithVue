const navbar = Vue.component('navbar', {
    template: `
        <header>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </header>
    `,
});

const counter = Vue.component('counter', {
    template: `
    <span>
        <button @click="this.increment">+</button>
        <span>{{sum}}</span>
        <button @click="this.decrement">-</button>
    </span>`,
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
});

const app = new Vue({
    el: '#app',
    data: {
        message: 'From Zero to Hero with Vue!',
        hasMessage: true,
        vue: 'Vue is an open-source Javascript framework for building user interfaces.',
        selected: '',
        messages: [
            { text: 'Hello World!' },
            { text: 'You are cool...' },
            { text: 'twitter.com/v_bataller' },
        ],
    },
    methods: {
        logMessage() {
            console.log(this.message);
        },
        toggleMessage() {
            this.hasMessage = !this.hasMessage;
        },
    },
    components: {
        navbar,
        counter,
    },
});