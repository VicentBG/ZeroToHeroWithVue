<template>
    <div id="app">
        <Navbar></Navbar>
        <Counter></Counter>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Counter from './Counter';

export default {
    name: 'App',
    components: { Navbar, Counter },
}
</script>

