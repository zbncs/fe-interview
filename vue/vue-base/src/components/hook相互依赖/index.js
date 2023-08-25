import {inject, provide, ref, watch} from 'vue'

function useCountA(n, m) {
    const c = ref(0)
    watch([n, m], () => {
        c.value = n+m
    }, {
        immediate: true
    })

    provide('hookA', c.value)

    const hookB = inject('hookB')
    console.log('B', hookB)

    return hookB + c
}

function useCountB(n, m) {
    provide('hookB', m+n)

    const hookA = inject('hookA')

    console.log(111, hookA)

    return hookA + m + n
}

export {
    useCountA,
    useCountB
}