<template>
    <DocComponent title="Vue PanelMenu Component" header="PanelMenu" description="PanelMenu is a hybrid of accordion-tree components." :componentDocs="docs" :apiDocs="['PanelMenu', 'MenuItem']" :ptTabComponent="ptComponent" />
</template>

<script>
import AccessibilityDoc from '@/doc/panelmenu/AccessibilityDoc';
import BasicDoc from '@/doc/panelmenu/BasicDoc';
import ImportDoc from '@/doc/panelmenu/ImportDoc';
import MultipleDoc from '@/doc/panelmenu/MultipleDoc';
import ProgrammaticDoc from '@/doc/panelmenu/ProgrammaticDoc';
import StyleDoc from '@/doc/panelmenu/StyleDoc';
import PTComponent from '@/doc/panelmenu/pt/index.vue';

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
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'programmatic',
                    label: 'Programmatic',
                    component: ProgrammaticDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
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
