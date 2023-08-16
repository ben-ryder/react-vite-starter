import {
    JButton,
    JButtonGroup, JButtonLink,
    JContentSection,
    JForm,
    JFormContent,
    JFormHeader,
    JFormRow,
    JInputControl,
} from "@ben-ryder/jigsaw-react";
import {routes} from "../../routes.ts";
import {JPanelPage} from "../../patterns/03-layouts/panel-page/panel-page.tsx";
import {JInternalLink} from "../../utils/internal-link.tsx";
import React from "react";


export function RegisterPage() {
    return (
        <JPanelPage
            heading="Register"
            content={
                <p>
                    Already got an account? <JInternalLink href={routes.user.login}>Log In</JInternalLink>.<br/>
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
                                label="Email"
                                placeholder="johnsmith@example.com"
                                required={true}
                            />
                        </JFormRow>
                        <JFormRow>
                            <JInputControl
                                label="Password"
                                type="password"
                                required={true}
                                placeholder="type your password..."
                            />
                        </JFormRow>
                        <JFormRow>
                            <JInputControl
                                label="Confirm Password"
                                type="password"
                                required={true}
                                placeholder="retype your password..."
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
