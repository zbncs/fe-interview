export let mixin = {
    data() {
        return {
            msg1: "mixinMsg",
        }
    },
    beforeCreate() {
        console.log("mixin beforeCreate");
    },
    created() {
        console.log("mixin created");
    },
    beforeMount() {
        console.log("mixin beforeMount");
    },
    mounted() {
        console.log("mixin mounted");
    },
    beforeUpdate() {
        console.log("mixin beforeUpdate");
    },
    updated() {
        console.log("mixin updated");
    },
    methods: {
        say() {
            console.log("mixin methods say ");
        }
    }
}
