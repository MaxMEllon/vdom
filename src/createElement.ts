interface FC<P = { children: Children }> {
  (props: P): VNode;
}

type Children = VNode | string | null;

export type VNode = {
  tag: string | FC<any>;
  attribute: Record<string, any> | null;
  children?: Array<VNode | string | null>;
};

export function h(
  tag: string | FC<any>,
  attribute: Record<string, any> | null,
  ...children: Array<VNode | string | null>
): VNode {
  if (typeof tag === "function") {
    return tag({ ...attribute, children });
  }
  return {
    tag,
    attribute,
    children
  };
}
