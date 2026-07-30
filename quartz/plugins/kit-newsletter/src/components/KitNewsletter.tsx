import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import style from "./styles/kit-newsletter.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
// import script from "./scripts/example.inline.ts";
import script from "./scripts/kit-newsletter.inline.ts";


export interface KitNewsletterOptions {
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default ((opts?: KitNewsletterOptions) => {
  const { prefix = "", suffix = "", className = "example-component" } = opts ?? {};

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    const frontmatter = props.fileData?.frontmatter as { title?: string } | undefined;
    const title = frontmatter?.title ?? "Untitled";
    const fullText = `${prefix}${title}${suffix}`;

    return (
      <div className="kit-newsletter">
        <hr className="kit-newsletter-hr"/>
        <h2>If you like what I write, you can subscribe:</h2>
        <script async data-uid="f090234a6e" src="https://mani-blog.kit.com/f090234a6e/index.js"></script>
      </div>
    )
  };

  Component.css = style;
  Component.afterDOMLoaded = script;

  return Component;
}) satisfies QuartzComponentConstructor;
