import React, {PropsWithChildren} from "react";
import {
  FileText as NotesIcon,
  ListChecks as TasksIcon,
  CalendarRange as JournalIcon,
  MoreHorizontal as MobileMenuIcon,
  Settings as SettingsIcon,
  Triangle as LogoIcon,
  LucideIcon,
  HelpCircle as HelpIcon,
  Filter as ViewsIcon,
  LayoutTemplate as PagesIcon
} from "lucide-react";
import { routes } from "../../../routes";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import classNames from "classnames";
import {UserCircle2} from "lucide-react";

export type MainMenuLinkType = "bottom" | "more"

export interface MainMenuLinkProps {
  Icon: LucideIcon;
  label: string;
  href: string;
  type?: MainMenuLinkType;
  isDesktopOnly?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
}
export function MainMenuLink(props: MainMenuLinkProps) {
  let resolved = useResolvedPath(props.href);
  let match = useMatch({ path: resolved.pathname, end: false });

  const className = classNames(
    "rvs-menu-bar__menu-link",
      props.type && `rvs-menu-bar__menu-link--${props.type}`,
      props.isDesktopOnly && "rvs-menu-bar__menu-link--desktop",
      match && "rvs-menu-bar__menu-link--active"
  );

  return (
    <Link to={props.href} className={className} target={props.target}>
      <props.Icon />
      <span>{props.label}</span>
    </Link>
  );
}

export interface GlobalLayoutProps extends PropsWithChildren {}

export function GlobalLayout(props: GlobalLayoutProps) {
  return (
    <div className="rvs-root">
      <div className="rvs-layout">
        <div className="rvs-menu-bar">
          <Link to="/" className="rvs-menu-bar__logo">
            <span className="logo">
              <LogoIcon size={32} />
            </span>
            <p>RVS</p>
          </Link>
          <div className="rvs-menu-bar__menu">
            <MainMenuLink
              label="Pages"
              href="/random"
              Icon={PagesIcon}
            />
            <MainMenuLink
              label="Views"
              href="/random"
              Icon={ViewsIcon}
            />
            <MainMenuLink
              label="Journal"
              href="/random"
              Icon={JournalIcon}
            />
            <MainMenuLink
              label="More"
              href="/menu"
              Icon={MobileMenuIcon}
              type="more"
            />

            <MainMenuLink
              label="Notes"
              href="/random"
              Icon={NotesIcon}
              isDesktopOnly={true}
            />
            <MainMenuLink
              label="Tasks"
              href="/random"
              Icon={TasksIcon}
              isDesktopOnly={true}
            />

            <MainMenuLink
              label="Account"
              href={routes.account}
              Icon={UserCircle2}
              type="bottom"
              isDesktopOnly={true}
            />
            <MainMenuLink
              label="Settings"
              href="/settings"
              Icon={SettingsIcon}
              isDesktopOnly={true}
            />
            <MainMenuLink
              label="Help"
              href={routes.external.docs}
              Icon={HelpIcon}
              target="_blank"
              isDesktopOnly={true}
            />
          </div>
        </div>
        <main className="rvs-main">{props.children}</main>
      </div>
    </div>
  );
}
