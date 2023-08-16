import {
    JButton,
    JButtonGroup,
    JForm,
    JFormContent,
    JFormRow,
    JInputControl,
} from "@ben-ryder/jigsaw-react";
import {routes} from "../../routes.ts";
import {JPanelPage} from "../../patterns/03-layouts/panel-page/panel-page.tsx";
import React from "react";
import {JInternalLink} from "../../utils/internal-link.tsx";


export function LoginPage() {
    return (
        <JPanelPage
            heading="Log In"
            content={
                <p>
                    Don't have an account yet? <JInternalLink href={routes.user.register}>Register</JInternalLink>.<br/>
                </p>
            }
            extraContent={
                <JForm>
                    <JFormContent>
                        <JFormRow>
                            <JInputControl
                                label="Username"
                                placeholder="johnsmith"
                                required={true}
                            />
                        </JFormRow>
                        <JFormRow>
                            <JInputControl
                                label="Password"
                                type="password"
                                required={true}
                                placeholder="your password..."
                            />
                        </JFormRow>
                        <JFormRow>
                            <JButtonGroup>
                                <JButton type="submit">Log In</JButton>
                            </JButtonGroup>
                        </JFormRow>
                    </JFormContent>
                </JForm>
            }
        />
    )
}
