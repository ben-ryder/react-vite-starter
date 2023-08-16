import React from "react";
import { routes } from "../routes";
import { JPanelPage } from "../patterns/03-layouts/panel-page/panel-page.tsx";
import { Helmet } from "react-helmet-async";
import {JArrowLink} from "@ben-ryder/jigsaw-react";
import { JInternalLink } from "../utils/internal-link";

export function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found | react-vite-starter</title>
      </Helmet>
      <JPanelPage
        heading="Not Found"
        content={<p>The page you requested could not be found.</p>}
        extraContent={
          <JArrowLink href={routes.home} direction="left" as={JInternalLink}>
            Back to Home
          </JArrowLink>
        }
      />
    </>
  );
}
