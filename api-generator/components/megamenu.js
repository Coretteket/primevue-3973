const MegaMenuProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Defines the orientation, valid values are horizontal and vertical.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    }
];

const MegaMenuSlots = [
    {
        name: 'start',
        description: 'Custom content before the content'
    },
    {
        name: 'end',
        description: 'Custom content after the content'
    },
    {
        name: 'item',
        description: 'Custom item template.'
    },
    {
        name: 'submenuicon',
        description: 'Custom submenu icon template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    megamenu: {
        name: 'MegaMenu',
        description: 'MegaMenu is navigation component that displays submenus together.',
        props: MegaMenuProps,
        slots: MegaMenuSlots
    }
};
