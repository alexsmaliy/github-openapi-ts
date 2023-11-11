/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_ruleset } from './repository_ruleset';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_repository_ruleset_created = {
    action: webhook_repository_ruleset_created.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    repository?: repository_webhooks;
    repository_ruleset: repository_ruleset;
    sender: simple_user_webhooks;
};

export namespace webhook_repository_ruleset_created {

    export enum action {
        CREATED = 'created',
    }


}
