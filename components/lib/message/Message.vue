<template>
    <transition name="p-message" appear>
        <div v-show="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('root')" data-pc-name="message">
            <div :class="cx('wrapper')" v-bind="ptm('wrapper')">
                <slot name="messageicon" class="p-message-icon">
                    <component :is="icon ? 'span' : iconComponent" :class="cx('icon')" v-bind="ptm('icon')"></component>
                </slot>
                <div class="p-message-text" :class="cx('text')" v-bind="ptm('text')">
                    <slot></slot>
                </div>
                <button v-if="closable" v-ripple :class="cx('button')" :aria-label="closeAriaLabel" type="button" @click="close($event)" v-bind="{ ...closeButtonProps, ...ptm('button') }">
                    <slot name="closeicon">
                        <i v-if="closeIcon" :class="cx('buttonIcon')" v-bind="ptm('buttonIcon')" />
                        <TimesIcon v-else :class="cx('buttonIcon')" v-bind="ptm('buttonIcon')" />
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import InfoCircleIcon from 'primevue/icons/infocircle';
import TimesIcon from 'primevue/icons/times';
import TimesCircleIcon from 'primevue/icons/timescircle';
import Ripple from 'primevue/ripple';
import BaseMessage from './BaseMessage.vue';

export default {
    name: 'Message',
    extends: BaseMessage,
    emits: ['close'],
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (!this.sticky) {
            this.closeAfterDelay();
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        },
        closeAfterDelay() {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        TimesIcon,
        InfoCircleIcon,
        CheckIcon,
        ExclamationTriangleIcon,
        TimesCircleIcon
    }
};
</script>
