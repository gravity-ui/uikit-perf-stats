// @ts-expect-error
const BUTTON_NODES_COUNT = import.meta.env.VITE_BUTTON_NODES_COUNT;
const buttonNodesCount = BUTTON_NODES_COUNT ? Number(BUTTON_NODES_COUNT) : 1000;
export const BUTTONS_DATA = [...new Array(buttonNodesCount)].map((_, i) => `Button ${i + 1}`);

// @ts-expect-error
const CHECKBOX_NODES_COUNT = import.meta.env.VITE_CHECKBOX_NODES_COUNT;
const checkboxNodesCount = CHECKBOX_NODES_COUNT ? Number(CHECKBOX_NODES_COUNT) : 1000;
export const CHECKBOX_DATA = [...new Array(checkboxNodesCount)].map((_, i) => `Checkbox ${i + 1}`);

// @ts-expect-error
const TEXT_INPUT_NODES_COUNT = import.meta.env.VITE_TEXT_INPUT_NODES_COUNT;
const textInputNodesCount = TEXT_INPUT_NODES_COUNT ? Number(TEXT_INPUT_NODES_COUNT) : 1000;
export const TEXT_INPUT_DATA = [...new Array(textInputNodesCount)].map(
    (_, i) => `TextInput ${i + 1}`,
);

// @ts-expect-error
const TEXTAREA_NODES_COUNT = import.meta.env.VITE_TEXT_AREA_NODES_COUNT;
const textareaNodesCount = TEXTAREA_NODES_COUNT ? Number(TEXTAREA_NODES_COUNT) : 1000;
export const TEXTAREA_DATA = [...new Array(textareaNodesCount)].map((_, i) => `TextArea ${i + 1}`);

// @ts-expect-error
const SWITCH_NODES_COUNT = import.meta.env.VITE_SWITCH_NODES_COUNT;
const switchNodesCount = SWITCH_NODES_COUNT ? Number(SWITCH_NODES_COUNT) : 1000;
export const SWITCH_DATA = [...new Array(switchNodesCount)].map((_, i) => `Switch ${i + 1}`);

// @ts-expect-error
const LABEL_NODES_COUNT = import.meta.env.VITE_LABEL_NODES_COUNT;
const labelNodesCount = LABEL_NODES_COUNT ? Number(LABEL_NODES_COUNT) : 1000;
export const LABEL_DATA = [...new Array(labelNodesCount)].map((_, i) => `Label ${i + 1}`);

// @ts-expect-error
const TEXT_NODES_COUNT = import.meta.env.VITE_TEXT_NODES_COUNT;
const textNodesCount = TEXT_NODES_COUNT ? Number(TEXT_NODES_COUNT) : 1000;
export const TEXT_DATA = [...new Array(textNodesCount)].map((_, i) => `Text ${i + 1}`);

// @ts-expect-error
const NUMBER_INPUT_NODES_COUNT = import.meta.env.VITE_NUMBER_INPUT_NODES_COUNT;
const numberInputNodesCount = NUMBER_INPUT_NODES_COUNT ? Number(NUMBER_INPUT_NODES_COUNT) : 1000;
export const NUMBER_INPUT_DATA = [...new Array(numberInputNodesCount)].map(
    (_, i) => `NumberInput ${i + 1}`,
);

// @ts-expect-error
const RADIO_GROUP_NODES_COUNT = import.meta.env.VITE_RADIO_GROUP_NODES_COUNT;
const radioGroupNodesCount = RADIO_GROUP_NODES_COUNT ? Number(RADIO_GROUP_NODES_COUNT) : 1000;
export const RADIO_GROUP_DATA = [...new Array(radioGroupNodesCount)].map(
    (_, i) => `RadioGroup ${i + 1}`,
);

// @ts-expect-error
const LINK_NODES_COUNT = import.meta.env.VITE_LINK_NODES_COUNT;
const linkNodesCount = LINK_NODES_COUNT ? Number(LINK_NODES_COUNT) : 1000;
export const LINKS_DATA = [...new Array(linkNodesCount)].map((_, i) => `Link ${i + 1}`);

// @ts-expect-error
const AVATAR_NODES_COUNT = import.meta.env.VITE_AVATAR_NODES_COUNT;
const avatarNodesCount = AVATAR_NODES_COUNT ? Number(AVATAR_NODES_COUNT) : 1000;
export const AVATAR_DATA = [...new Array(avatarNodesCount)].map((_, i) => `User ${i + 1}`);
