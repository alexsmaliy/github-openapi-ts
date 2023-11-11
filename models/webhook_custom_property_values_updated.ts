/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { custom_property_value } from './custom_property_value';
import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_custom_property_values_updated = {
    action: webhook_custom_property_values_updated.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    repository: repository_webhooks;
    organization: organization_simple_webhooks;
    sender?: simple_user_webhooks;
    /**
     * The new custom property values for the repository.
     */
    new_property_values: Array<custom_property_value>;
    /**
     * The old custom property values for the repository.
     */
    old_property_values: Array<custom_property_value>;
};

export namespace webhook_custom_property_values_updated {

    export enum action {
        UPDATED = 'updated',
    }


}

