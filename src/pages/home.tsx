import React from "react";
import { routes } from "../routes";
import { RVSMessagePage } from "../patterns/03-layouts/message-page/message-page";
import { Helmet } from "react-helmet-async";
import {JArrowLink, JButtonGroup, JButtonLink} from "@ben-ryder/jigsaw-react";
import { RVSInternalLink } from "../utils/internal-link";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | react-vite-starter</title>
      </Helmet>
      <RVSMessagePage
        heading="react-vite-starter"
        content={<p>Welcome to react-vite-starter!</p>}
        extraContent={
            <JButtonGroup>
                <JButtonLink href={routes.home} variant="secondary" as={RVSInternalLink}>
                    Register
                </JButtonLink>
                <JButtonLink href={routes.home}as={RVSInternalLink}>
                   Log In
                </JButtonLink>
            </JButtonGroup>
        }
      />
    </>
  );
}
