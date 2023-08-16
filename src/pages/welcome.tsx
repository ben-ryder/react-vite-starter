import React from "react";

import { routes } from "../routes";
import { Helmet } from "react-helmet-async";
import { JPanelPage } from "../patterns/03-layouts/panel-page/panel-page";
import { JButtonGroup, JButtonLink } from "@ben-ryder/jigsaw-react";
import {JInternalLink} from "../utils/internal-link.tsx";

export function WelcomePage() {
  return (
    <>
      <Helmet>
        <title>Welcome | react-vite-starter</title>
      </Helmet>
      <JPanelPage
        heading="Welcome to react-vite-starter"
        content={
          <>
            <p>
              This is a starter application for React applications. <a href={routes.external.docs}>Learn More</a>
            </p>
          </>
        }
        extraContent={
          <JButtonGroup>
            <JButtonLink variant="secondary" href={routes.user.register} as={JInternalLink}>Register</JButtonLink>
            <JButtonLink href={routes.user.login} as={JInternalLink}>Log In</JButtonLink>
          </JButtonGroup>
        }
      />
    </>
  );
}
