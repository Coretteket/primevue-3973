<template>
    <DocComponent title="Vue Toast Component" header="Toast" description="Toast is used to display messages in an overlay." :componentDocs="docs" :apiDocs="['Toast', 'ToastService-UseToast']" :ptTabComponent="ptComponent" />
</template>

<script>
import AccessibilityDoc from '@/doc/toast/AccessibilityDoc.vue';
import BasicDoc from '@/doc/toast/BasicDoc.vue';
import ImportDoc from '@/doc/toast/ImportDoc.vue';
import MultipleDoc from '@/doc/toast/MultipleDoc.vue';
import PositionDoc from '@/doc/toast/PositionDoc.vue';
import SeverityDoc from '@/doc/toast/SeverityDoc.vue';
import StickyDoc from '@/doc/toast/StickyDoc.vue';
import StyleDoc from '@/doc/toast/StyleDoc.vue';
import TemplateDoc from '@/doc/toast/TemplateDoc.vue';
import ToastServiceDoc from '@/doc/toast/ToastServiceDoc.vue';
import PTComponent from '@/doc/toast/pt/index.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'toast-service',
                    label: 'Toast Service',
                    component: ToastServiceDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'severity',
                    label: 'Severity',
                    component: SeverityDoc
                },
                {
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'sticky',
                    label: 'Sticky',
                    component: StickyDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent
        };
    }
};
</script>
