import React from "react";
import { Helmet } from "react-helmet-async";
import { JContentSection, JProse } from "@ben-ryder/jigsaw-react";
import { routes } from "../routes";
import { Link } from "react-router-dom";

/**
 * A page version of the main menu bar, used on mobile devices when space needs to be saved in the menu.
 *
 * @constructor
 */
export function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Menu | react-vite-starter</title>
      </Helmet>

      <JContentSection>
        <JProse>
          <h2>Main Content</h2>
          <ul>
            <li>
              <Link to="/random">Notes</Link>
            </li>
            <li>
              <Link to="/random">Tasks</Link>
            </li>
            <li>
              <Link to="/random">Journal</Link>
            </li>
          </ul>

          <h2>Other</h2>
          <ul>
            <li>
              <Link to={routes.external.github} target="_blank">
                Project GitHub
              </Link>
            </li>
            <li>
              <Link to={routes.external.docs} target="_blank">
                Help & Documentation
              </Link>
            </li>
            <li>
              <Link to={routes.external.creator} target="_blank">
                benryder.me
              </Link>
            </li>
          </ul>
        </JProse>
      </JContentSection>
    </>
  );
}
