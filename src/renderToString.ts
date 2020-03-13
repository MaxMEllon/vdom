import { VNode } from "./createElement";

export const renderToString = (node: VNode): string => {
  const attr =
    node.attribute && typeof node.attribute === "object"
      ? Object.entries(node.attribute)
          .map(tuple => {
            const [k, v] = tuple;
            return `${k}=${v}`;
          })
          .join(" ")
      : "";
  if (!node.children) {
    return `<${node.tag} ${attr}></${node.tag}>`;
  }
  return `<${[node.tag, ...attr].join("")}>
${node.children.map(n => {
  if (typeof n === "string") return n;
  if (!n) return "";
  return renderToString(n);
})}
</${node.tag}>`;
};
