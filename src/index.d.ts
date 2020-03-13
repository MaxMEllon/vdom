declare namespace JSX {
  import { VNode } from "./createElement";
  type Element = VNode;
  interface IntrinsicElements {
    div: {};
    p: {};
  }
}
