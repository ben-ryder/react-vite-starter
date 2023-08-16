import React from "react";
import { JPanelPage } from "../patterns/03-layouts/panel-page/panel-page.tsx";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | react-vite-starter</title>
      </Helmet>
      <JPanelPage
        heading="react-vite-starter"
        content={<p>Welcome to react-vite-starter! This is the homepage</p>}
      />
    </>
  );
}
