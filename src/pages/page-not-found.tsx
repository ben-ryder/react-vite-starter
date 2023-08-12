import React from "react";
import { routes } from "../routes";
import { RVSMessagePage } from "../patterns/03-layouts/message-page/message-page";
import { Helmet } from "react-helmet-async";
import {JArrowLink, JButtonGroup} from "@ben-ryder/jigsaw-react";
import { RVSInternalLink } from "../utils/internal-link";

export function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found | react-vite-starter</title>
      </Helmet>
      <RVSMessagePage
        heading="Not Found"
        content={<p>The page you requested could not be found.</p>}
        extraContent={
          <JArrowLink href={routes.home} direction="left" as={RVSInternalLink}>
            Back to Home
          </JArrowLink>
        }
      />
    </>
  );
}
