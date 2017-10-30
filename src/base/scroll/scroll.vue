<template>
    <div ref="wrapper">
        <slot>

        </slot>

    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        }
    },
    mounted() {
        setTimeout(() => {
            this._initScroll()
        }, 20)
    },
    method: {
        _initScroll() {

        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
