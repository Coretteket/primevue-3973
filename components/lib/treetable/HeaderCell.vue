<template>
    <th
        :class="containerClass"
        :style="[containerStyle]"
        @click="onClick"
        @keydown="onKeyDown"
        :tabindex="columnProp('sortable') ? '0' : null"
        :aria-sort="ariaSort"
        role="columnheader"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
        :data-p-sortable-column="columnProp('sortable')"
        :data-p-resizable-column="resizableColumns"
        :data-p-highlight="isColumnSorted()"
        :data-p-frozen-column="columnProp('frozen')"
    >
        <span v-if="resizableColumns && !columnProp('frozen')" :class="cx('columnResizer')" @mousedown="onResizeStart" v-bind="getColumnPT('columnResizer')"></span>
        <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
        <span v-if="columnProp('header')" :class="cx('headerTitle')" v-bind="getColumnPT('headerTitle')">{{ columnProp('header') }}</span>
        <span v-if="columnProp('sortable')" v-bind="getColumnPT('sort')">
            <component :is="(column.children && column.children.sorticon) || sortableColumnIcon" :sorted="sortState.sorted" :sortOrder="sortState.sortOrder" :class="cx('sortIcon')" />
        </span>
        <span v-if="isMultiSorted()" :class="cx('sortBadge')" v-bind="getColumnPT('sortBadge')">{{ getMultiSortMetaIndex() + 1 }}</span>
    </th>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import SortAltIcon from 'primevue/icons/sortalt';
import SortAmountDownIcon from 'primevue/icons/sortamountdown';
import SortAmountUpAltIcon from 'primevue/icons/sortamountupalt';
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    name: 'HeaderCell',
    hostName: 'TreeTable',
    extends: BaseComponent,
    emits: ['column-click', 'column-resizestart'],
    props: {
        column: {
            type: Object,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        index: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        };
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index
                }
            };

            return { ...this.ptm(`column.${key}`, { column: columnMetaData }), ...this.ptmo(this.getColumnProp(), key, columnMetaData) };
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;

                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;

                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;

                if (filterRow) {
                    let index = DomHandler.index(this.$el);

                    filterRow.children[index].style.left = this.styleObject.left;
                    filterRow.children[index].style.right = this.styleObject.right;
                }
            }
        },
        onClick(event) {
            this.$emit('column-click', { originalEvent: event, column: this.column });
        },
        onKeyDown(event) {
            if ((event.code === 'Enter' || event.code === 'Space') && event.currentTarget.nodeName === 'TH' && DomHandler.getAttribute(event.currentTarget, 'data-p-sortable-column')) {
                this.$emit('column-click', { originalEvent: event, column: this.column });

                event.preventDefault();
            }
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            let index = -1;

            for (let i = 0; i < this.multiSortMeta.length; i++) {
                let meta = this.multiSortMeta[i];

                if (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        isMultiSorted() {
            return this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('headerClass'), this.columnProp('class'), this.cx('headerCell')];
        },
        containerStyle() {
            let headerStyle = this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
        },
        sortState() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder : 0;
            } else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();

                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return {
                sorted,
                sortOrder
            };
        },
        sortableColumnIcon() {
            const { sorted, sortOrder } = this.sortState;

            if (!sorted) return SortAltIcon;
            else if (sorted && sortOrder > 0) return SortAmountUpAltIcon;
            else if (sorted && sortOrder < 0) return SortAmountDownIcon;

            return null;
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const { sorted, sortOrder } = this.sortState;

                if (sorted && sortOrder < 0) return 'descending';
                else if (sorted && sortOrder > 0) return 'ascending';
                else return 'none';
            } else {
                return null;
            }
        }
    },
    components: {
        SortAltIcon: SortAltIcon,
        SortAmountUpAltIcon: SortAmountUpAltIcon,
        SortAmountDownIcon: SortAmountDownIcon
    }
};
</script>
