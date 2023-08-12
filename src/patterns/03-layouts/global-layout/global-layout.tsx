import {PropsWithChildren} from "../../../utils/children-props.ts";

export interface GlobalLayoutProps extends PropsWithChildren {}

export function GlobalLayout(props: GlobalLayoutProps) {
    return (
        <div className="rvs-layout">
            {props.children}
        </div>
    )
}
