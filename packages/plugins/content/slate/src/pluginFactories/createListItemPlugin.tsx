import createSimpleHtmlBlockPlugin from './createSimpleHtmlBlockPlugin';

type ListItemDef = {
  type: string;
  tagName: string;
};

export default function <T>(def: ListItemDef) {
  return createSimpleHtmlBlockPlugin<T>({
    noButton: true,
    tagName: def.tagName,
    type: def.type,
  });
}
