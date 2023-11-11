/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_custom_property_deleted = {
    action: webhook_custom_property_deleted.action;
    definition: {
        /**
         * The name of the property that was deleted.
         */
        property_name: string;
    };
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization: organization_simple_webhooks;
    sender?: simple_user_webhooks;
};

export namespace webhook_custom_property_deleted {

    export enum action {
        DELETED = 'deleted',
    }


}

