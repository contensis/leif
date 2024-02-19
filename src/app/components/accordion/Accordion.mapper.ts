import { mapJson } from '@zengenti/contensis-react-base/util';

export const AccordionPropsMapping = {
  title: 'title',
  items: 'accordionItems',
};

export const AccordionItemMapping = {
  title: 'title',
  content: 'text',
};

export const AccordionCanvasMapping = {
  title: 'block.value.title',
  items: {
    $path: 'block.value.accordionItem',
    $formatting: (accordion: any) => mapJson(accordion, AccordionItemMapping),
  },
};
