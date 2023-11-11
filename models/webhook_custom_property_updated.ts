/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { org_custom_property } from './org_custom_property';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_custom_property_updated = {
    action: webhook_custom_property_updated.action;
    definition: org_custom_property;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_custom_property_updated {

    export enum action {
        UPDATED = 'updated',
    }


}

