/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "../../clarity-angular";
import { FormsModule } from "@angular/forms";
import { ROUTING } from "./wizard.demo.routing";
import { CodeExample } from "../_utils/code-example";
import { WizardDemo } from "./wizard.demo";
import { WizardBasicDemo } from "./wizard-basic.demo";
import { WizardSkipPageDemo } from "./wizard-skip-page.demo";
import { WizardFormValidation } from "./wizard-form-validation.demo";
import { WizardAsyncValidation } from "./wizard-async-validation.demo";
import { WizardNotClosableDemo } from "./wizard-not-closable.demo";
import { WizardGhostsDemo } from "./wizard-ghosts.demo";
import { WizardCustomButtonsDemo } from "./wizard-custom-buttons.demo";
import { WizardResetDemo } from "./wizard-reset.demo";
import { WizardHeaderActionsDemo } from "./wizard-header-actions.demo";
import { WizardAltCancelDemo } from "./wizard-alt-cancel.demo";
import { WizardInlineDemo } from "./wizard-inline.demo";
import { WizardJumpToDemo } from "./wizard-jump-to.demo";
import { WizardAltNextDemo } from "./wizard-alt-next.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        ROUTING
    ],
    declarations: [
        WizardBasicDemo,
        WizardDemo,
        WizardSkipPageDemo,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardNotClosableDemo,
        WizardGhostsDemo,
        WizardCustomButtonsDemo,
        WizardResetDemo,
        WizardHeaderActionsDemo,
        WizardAltCancelDemo,
        WizardInlineDemo,
        WizardJumpToDemo,
        CodeExample,
        WizardAltNextDemo
    ],
    exports: [
        WizardBasicDemo,
        WizardDemo,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardNotClosableDemo,
        WizardGhostsDemo,
        WizardSkipPageDemo,
        WizardCustomButtonsDemo,
        WizardHeaderActionsDemo,
        WizardAltCancelDemo,
        WizardInlineDemo,
        WizardResetDemo,
        WizardJumpToDemo,
        CodeExample,
        WizardAltNextDemo
    ]
})
export default class WizardDemoModule {
}