/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository_rule_params_workflow_file_reference } from './repository_rule_params_workflow_file_reference';

/**
 * Require all changes made to a targeted branch to pass the specified workflows before they can be merged.
 */
export type repository_rule_workflows = {
    type: repository_rule_workflows.type;
    parameters?: {
        /**
         * Workflows that must pass for this rule to pass.
         */
        workflows: Array<repository_rule_params_workflow_file_reference>;
    };
};

export namespace repository_rule_workflows {

    export enum type {
        WORKFLOWS = 'workflows',
    }


}

