import React, { ReactNode } from "react";

export interface MessagePageProps {
  heading: string;
  content: ReactNode;
  extraContent?: ReactNode;
}

export function RVSMessagePage(props: MessagePageProps) {
  return (
    <div className="rvs-message-page">
      <div className="rvs-message-page__panel">
        <h1 className="rvs-message-page__panel-heading">{props.heading}</h1>
        <div className="rvs-message-page__panel-text">
          <div className="j-prose">{props.content}</div>
        </div>
        <div className="rvs-message-page__panel-extra-content">
          {props.extraContent && props.extraContent}
        </div>
      </div>
    </div>
  );
}
