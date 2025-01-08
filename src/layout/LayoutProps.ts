import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

export interface LayoutProps {
  leftSideImage?: ImageWithSourceAndDescription;
  rightSideImage?: ImageWithSourceAndDescription;
  pageTitle?: string;
}
