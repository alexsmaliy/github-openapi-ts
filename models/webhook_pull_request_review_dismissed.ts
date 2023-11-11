/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enterprise_webhooks } from './enterprise_webhooks';
import type { organization_simple_webhooks } from './organization_simple_webhooks';
import type { repository_webhooks } from './repository_webhooks';
import type { simple_installation } from './simple_installation';
import type { simple_user_webhooks } from './simple_user_webhooks';

export type webhook_pull_request_review_dismissed = {
    action: webhook_pull_request_review_dismissed.action;
    enterprise?: enterprise_webhooks;
    installation?: simple_installation;
    organization?: organization_simple_webhooks;
    pull_request: {
        _links: {
            comments: {
                href: string;
            };
            commits: {
                href: string;
            };
            html: {
                href: string;
            };
            issue: {
                href: string;
            };
            review_comment: {
                href: string;
            };
            review_comments: {
                href: string;
            };
            self: {
                href: string;
            };
            statuses: {
                href: string;
            };
        };
        active_lock_reason: webhook_pull_request_review_dismissed.active_lock_reason | null;
        assignee: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_pull_request_review_dismissed.type;
            url?: string;
        } | null;
        assignees: Array<{
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
            url?: string;
        } | null>;
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_pull_request_review_dismissed.author_association;
        /**
         * The status of auto merging a pull request.
         */
        auto_merge: {
            /**
             * Commit message for the merge commit.
             */
            commit_message: string | null;
            /**
             * Title for the merge commit message.
             */
            commit_title: string | null;
            enabled_by: {
                avatar_url?: string;
                deleted?: boolean;
                email?: string | null;
                events_url?: string;
                followers_url?: string;
                following_url?: string;
                gists_url?: string;
                gravatar_id?: string;
                html_url?: string;
                id: number;
                login: string;
                name?: string;
                node_id?: string;
                organizations_url?: string;
                received_events_url?: string;
                repos_url?: string;
                site_admin?: boolean;
                starred_url?: string;
                subscriptions_url?: string;
                type?: webhook_pull_request_review_dismissed.type;
                url?: string;
            } | null;
            /**
             * The merge method to use.
             */
            merge_method: webhook_pull_request_review_dismissed.merge_method;
        } | null;
        base: {
            label: string;
            ref: string;
            /**
             * A git repository
             */
            repo: {
                /**
                 * Whether to allow auto-merge for pull requests.
                 */
                allow_auto_merge?: boolean;
                /**
                 * Whether to allow private forks
                 */
                allow_forking?: boolean;
                /**
                 * Whether to allow merge commits for pull requests.
                 */
                allow_merge_commit?: boolean;
                /**
                 * Whether to allow rebase merges for pull requests.
                 */
                allow_rebase_merge?: boolean;
                /**
                 * Whether to allow squash merges for pull requests.
                 */
                allow_squash_merge?: boolean;
                allow_update_branch?: boolean;
                archive_url: string;
                /**
                 * Whether the repository is archived.
                 */
                archived: boolean;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                clone_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                created_at: (number | string);
                /**
                 * The default branch of the repository.
                 */
                default_branch: string;
                /**
                 * Whether to delete head branches when pull requests are merged
                 */
                delete_branch_on_merge?: boolean;
                deployments_url: string;
                description: string | null;
                /**
                 * Returns whether or not this repository is disabled.
                 */
                disabled?: boolean;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks: number;
                forks_count: number;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                git_url: string;
                /**
                 * Whether downloads are enabled.
                 */
                has_downloads: boolean;
                /**
                 * Whether issues are enabled.
                 */
                has_issues: boolean;
                has_pages: boolean;
                /**
                 * Whether projects are enabled.
                 */
                has_projects: boolean;
                /**
                 * Whether the wiki is enabled.
                 */
                has_wiki: boolean;
                /**
                 * Whether discussions are enabled.
                 */
                has_discussions: boolean;
                homepage: string | null;
                hooks_url: string;
                html_url: string;
                /**
                 * Unique identifier of the repository
                 */
                id: number;
                is_template?: boolean;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                language: string | null;
                languages_url: string;
                license: {
                    key: string;
                    name: string;
                    node_id: string;
                    spdx_id: string;
                    url: string | null;
                } | null;
                master_branch?: string;
                /**
                 * The default value for a merge commit message.
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `PR_BODY` - default to the pull request's body.
                 * - `BLANK` - default to a blank commit message.
                 */
                merge_commit_message?: webhook_pull_request_review_dismissed.merge_commit_message;
                /**
                 * The default value for a merge commit title.
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
                 */
                merge_commit_title?: webhook_pull_request_review_dismissed.merge_commit_title;
                merges_url: string;
                milestones_url: string;
                mirror_url: string | null;
                /**
                 * The name of the repository.
                 */
                name: string;
                node_id: string;
                notifications_url: string;
                open_issues: number;
                open_issues_count: number;
                organization?: string;
                owner: {
                    avatar_url?: string;
                    deleted?: boolean;
                    email?: string | null;
                    events_url?: string;
                    followers_url?: string;
                    following_url?: string;
                    gists_url?: string;
                    gravatar_id?: string;
                    html_url?: string;
                    id: number;
                    login: string;
                    name?: string;
                    node_id?: string;
                    organizations_url?: string;
                    received_events_url?: string;
                    repos_url?: string;
                    site_admin?: boolean;
                    starred_url?: string;
                    subscriptions_url?: string;
                    type?: webhook_pull_request_review_dismissed.type;
                    url?: string;
                } | null;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    pull: boolean;
                    push: boolean;
                    triage?: boolean;
                };
                /**
                 * Whether the repository is private or public.
                 */
                private: boolean;
                public?: boolean;
                pulls_url: string;
                pushed_at: (number | string) | null;
                releases_url: string;
                role_name?: string | null;
                size: number;
                /**
                 * The default value for a squash merge commit message:
                 *
                 * - `PR_BODY` - default to the pull request's body.
                 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
                 * - `BLANK` - default to a blank commit message.
                 */
                squash_merge_commit_message?: webhook_pull_request_review_dismissed.squash_merge_commit_message;
                /**
                 * The default value for a squash merge commit title:
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
                 */
                squash_merge_commit_title?: webhook_pull_request_review_dismissed.squash_merge_commit_title;
                ssh_url: string;
                stargazers?: number;
                stargazers_count: number;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                svn_url: string;
                tags_url: string;
                teams_url: string;
                topics: Array<string>;
                trees_url: string;
                updated_at: string;
                url: string;
                /**
                 * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
                 */
                use_squash_pr_title_as_default?: boolean;
                visibility: webhook_pull_request_review_dismissed.visibility;
                watchers: number;
                watchers_count: number;
                /**
                 * Whether to require contributors to sign off on web-based commits
                 */
                web_commit_signoff_required?: boolean;
            };
            sha: string;
            user: {
                avatar_url?: string;
                deleted?: boolean;
                email?: string | null;
                events_url?: string;
                followers_url?: string;
                following_url?: string;
                gists_url?: string;
                gravatar_id?: string;
                html_url?: string;
                id: number;
                login: string;
                name?: string;
                node_id?: string;
                organizations_url?: string;
                received_events_url?: string;
                repos_url?: string;
                site_admin?: boolean;
                starred_url?: string;
                subscriptions_url?: string;
                type?: webhook_pull_request_review_dismissed.type;
                url?: string;
            } | null;
        };
        body: string | null;
        closed_at: string | null;
        comments_url: string;
        commits_url: string;
        created_at: string;
        diff_url: string;
        draft: boolean;
        head: {
            label: string;
            ref: string;
            /**
             * A git repository
             */
            repo: {
                /**
                 * Whether to allow auto-merge for pull requests.
                 */
                allow_auto_merge?: boolean;
                /**
                 * Whether to allow private forks
                 */
                allow_forking?: boolean;
                /**
                 * Whether to allow merge commits for pull requests.
                 */
                allow_merge_commit?: boolean;
                /**
                 * Whether to allow rebase merges for pull requests.
                 */
                allow_rebase_merge?: boolean;
                /**
                 * Whether to allow squash merges for pull requests.
                 */
                allow_squash_merge?: boolean;
                allow_update_branch?: boolean;
                archive_url: string;
                /**
                 * Whether the repository is archived.
                 */
                archived: boolean;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                clone_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                created_at: (number | string);
                /**
                 * The default branch of the repository.
                 */
                default_branch: string;
                /**
                 * Whether to delete head branches when pull requests are merged
                 */
                delete_branch_on_merge?: boolean;
                deployments_url: string;
                description: string | null;
                /**
                 * Returns whether or not this repository is disabled.
                 */
                disabled?: boolean;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks: number;
                forks_count: number;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                git_url: string;
                /**
                 * Whether downloads are enabled.
                 */
                has_downloads: boolean;
                /**
                 * Whether issues are enabled.
                 */
                has_issues: boolean;
                has_pages: boolean;
                /**
                 * Whether projects are enabled.
                 */
                has_projects: boolean;
                /**
                 * Whether the wiki is enabled.
                 */
                has_wiki: boolean;
                /**
                 * Whether discussions are enabled.
                 */
                has_discussions: boolean;
                homepage: string | null;
                hooks_url: string;
                html_url: string;
                /**
                 * Unique identifier of the repository
                 */
                id: number;
                is_template?: boolean;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                language: string | null;
                languages_url: string;
                license: {
                    key: string;
                    name: string;
                    node_id: string;
                    spdx_id: string;
                    url: string | null;
                } | null;
                master_branch?: string;
                /**
                 * The default value for a merge commit message.
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `PR_BODY` - default to the pull request's body.
                 * - `BLANK` - default to a blank commit message.
                 */
                merge_commit_message?: webhook_pull_request_review_dismissed.merge_commit_message;
                /**
                 * The default value for a merge commit title.
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
                 */
                merge_commit_title?: webhook_pull_request_review_dismissed.merge_commit_title;
                merges_url: string;
                milestones_url: string;
                mirror_url: string | null;
                /**
                 * The name of the repository.
                 */
                name: string;
                node_id: string;
                notifications_url: string;
                open_issues: number;
                open_issues_count: number;
                organization?: string;
                owner: {
                    avatar_url?: string;
                    deleted?: boolean;
                    email?: string | null;
                    events_url?: string;
                    followers_url?: string;
                    following_url?: string;
                    gists_url?: string;
                    gravatar_id?: string;
                    html_url?: string;
                    id: number;
                    login: string;
                    name?: string;
                    node_id?: string;
                    organizations_url?: string;
                    received_events_url?: string;
                    repos_url?: string;
                    site_admin?: boolean;
                    starred_url?: string;
                    subscriptions_url?: string;
                    type?: webhook_pull_request_review_dismissed.type;
                    url?: string;
                } | null;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    pull: boolean;
                    push: boolean;
                    triage?: boolean;
                };
                /**
                 * Whether the repository is private or public.
                 */
                private: boolean;
                public?: boolean;
                pulls_url: string;
                pushed_at: (number | string) | null;
                releases_url: string;
                role_name?: string | null;
                size: number;
                /**
                 * The default value for a squash merge commit message:
                 *
                 * - `PR_BODY` - default to the pull request's body.
                 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
                 * - `BLANK` - default to a blank commit message.
                 */
                squash_merge_commit_message?: webhook_pull_request_review_dismissed.squash_merge_commit_message;
                /**
                 * The default value for a squash merge commit title:
                 *
                 * - `PR_TITLE` - default to the pull request's title.
                 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
                 */
                squash_merge_commit_title?: webhook_pull_request_review_dismissed.squash_merge_commit_title;
                ssh_url: string;
                stargazers?: number;
                stargazers_count: number;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                svn_url: string;
                tags_url: string;
                teams_url: string;
                topics: Array<string>;
                trees_url: string;
                updated_at: string;
                url: string;
                /**
                 * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
                 */
                use_squash_pr_title_as_default?: boolean;
                visibility: webhook_pull_request_review_dismissed.visibility;
                watchers: number;
                watchers_count: number;
                /**
                 * Whether to require contributors to sign off on web-based commits
                 */
                web_commit_signoff_required?: boolean;
            } | null;
            sha: string;
            user: {
                avatar_url?: string;
                deleted?: boolean;
                email?: string | null;
                events_url?: string;
                followers_url?: string;
                following_url?: string;
                gists_url?: string;
                gravatar_id?: string;
                html_url?: string;
                id: number;
                login: string;
                name?: string;
                node_id?: string;
                organizations_url?: string;
                received_events_url?: string;
                repos_url?: string;
                site_admin?: boolean;
                starred_url?: string;
                subscriptions_url?: string;
                type?: webhook_pull_request_review_dismissed.type;
                url?: string;
            } | null;
        };
        html_url: string;
        id: number;
        issue_url: string;
        labels: Array<{
            /**
             * 6-character hex code, without the leading #, identifying the color
             */
            color: string;
            default: boolean;
            description: string | null;
            id: number;
            /**
             * The name of the label.
             */
            name: string;
            node_id: string;
            /**
             * URL for the label
             */
            url: string;
        }>;
        locked: boolean;
        merge_commit_sha: string | null;
        merged_at: string | null;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: {
            closed_at: string | null;
            closed_issues: number;
            created_at: string;
            creator: {
                avatar_url?: string;
                deleted?: boolean;
                email?: string | null;
                events_url?: string;
                followers_url?: string;
                following_url?: string;
                gists_url?: string;
                gravatar_id?: string;
                html_url?: string;
                id: number;
                login: string;
                name?: string;
                node_id?: string;
                organizations_url?: string;
                received_events_url?: string;
                repos_url?: string;
                site_admin?: boolean;
                starred_url?: string;
                subscriptions_url?: string;
                type?: webhook_pull_request_review_dismissed.type;
                url?: string;
            } | null;
            description: string | null;
            due_on: string | null;
            html_url: string;
            id: number;
            labels_url: string;
            node_id: string;
            /**
             * The number of the milestone.
             */
            number: number;
            open_issues: number;
            /**
             * The state of the milestone.
             */
            state: webhook_pull_request_review_dismissed.state;
            /**
             * The title of the milestone.
             */
            title: string;
            updated_at: string;
            url: string;
        } | null;
        node_id: string;
        number: number;
        patch_url: string;
        requested_reviewers: Array<({
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
            url?: string;
        } | null | {
            deleted?: boolean;
            /**
             * Description of the team
             */
            description: string | null;
            html_url: string;
            /**
             * Unique identifier of the team
             */
            id: number;
            members_url: string;
            /**
             * Name of the team
             */
            name: string;
            node_id: string;
            parent?: {
                /**
                 * Description of the team
                 */
                description: string | null;
                html_url: string;
                /**
                 * Unique identifier of the team
                 */
                id: number;
                members_url: string;
                /**
                 * Name of the team
                 */
                name: string;
                node_id: string;
                /**
                 * Permission that the team will have for its repositories
                 */
                permission: string;
                privacy: 'open' | 'closed' | 'secret';
                repositories_url: string;
                slug: string;
                /**
                 * URL for the team
                 */
                url: string;
            } | null;
            /**
             * Permission that the team will have for its repositories
             */
            permission: string;
            privacy: 'open' | 'closed' | 'secret';
            repositories_url: string;
            slug: string;
            /**
             * URL for the team
             */
            url: string;
        })>;
        requested_teams: Array<{
            deleted?: boolean;
            /**
             * Description of the team
             */
            description?: string | null;
            html_url?: string;
            /**
             * Unique identifier of the team
             */
            id: number;
            members_url?: string;
            /**
             * Name of the team
             */
            name: string;
            node_id?: string;
            parent?: {
                /**
                 * Description of the team
                 */
                description: string | null;
                html_url: string;
                /**
                 * Unique identifier of the team
                 */
                id: number;
                members_url: string;
                /**
                 * Name of the team
                 */
                name: string;
                node_id: string;
                /**
                 * Permission that the team will have for its repositories
                 */
                permission: string;
                privacy: 'open' | 'closed' | 'secret';
                repositories_url: string;
                slug: string;
                /**
                 * URL for the team
                 */
                url: string;
            } | null;
            /**
             * Permission that the team will have for its repositories
             */
            permission?: string;
            privacy?: 'open' | 'closed' | 'secret';
            repositories_url?: string;
            slug?: string;
            /**
             * URL for the team
             */
            url?: string;
        }>;
        review_comment_url: string;
        review_comments_url: string;
        state: webhook_pull_request_review_dismissed.state;
        statuses_url: string;
        title: string;
        updated_at: string;
        url: string;
        user: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_pull_request_review_dismissed.type;
            url?: string;
        } | null;
    };
    repository: repository_webhooks;
    /**
     * The review that was affected.
     */
    review: {
        _links: {
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        /**
         * How the author is associated with the repository.
         */
        author_association: webhook_pull_request_review_dismissed.author_association;
        /**
         * The text of the review.
         */
        body: string | null;
        /**
         * A commit SHA for the review.
         */
        commit_id: string;
        html_url: string;
        /**
         * Unique identifier of the review
         */
        id: number;
        node_id: string;
        pull_request_url: string;
        state: webhook_pull_request_review_dismissed.state;
        submitted_at: string;
        user: {
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: webhook_pull_request_review_dismissed.type;
            url?: string;
        } | null;
    };
    sender: simple_user_webhooks;
};

export namespace webhook_pull_request_review_dismissed {

    export enum action {
        DISMISSED = 'dismissed',
    }

    export enum active_lock_reason {
        RESOLVED = 'resolved',
        OFF_TOPIC = 'off-topic',
        TOO_HEATED = 'too heated',
        SPAM = 'spam',
    }

    export enum type {
        BOT = 'Bot',
        USER = 'User',
        ORGANIZATION = 'Organization',
        MANNEQUIN = 'Mannequin',
    }

    /**
     * How the author is associated with the repository.
     */
    export enum author_association {
        COLLABORATOR = 'COLLABORATOR',
        CONTRIBUTOR = 'CONTRIBUTOR',
        FIRST_TIMER = 'FIRST_TIMER',
        FIRST_TIME_CONTRIBUTOR = 'FIRST_TIME_CONTRIBUTOR',
        MANNEQUIN = 'MANNEQUIN',
        MEMBER = 'MEMBER',
        NONE = 'NONE',
        OWNER = 'OWNER',
    }

    /**
     * The merge method to use.
     */
    export enum merge_method {
        MERGE = 'merge',
        SQUASH = 'squash',
        REBASE = 'rebase',
    }

    /**
     * The default value for a merge commit message.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    export enum merge_commit_message {
        PR_BODY = 'PR_BODY',
        PR_TITLE = 'PR_TITLE',
        BLANK = 'BLANK',
    }

    /**
     * The default value for a merge commit title.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    export enum merge_commit_title {
        PR_TITLE = 'PR_TITLE',
        MERGE_MESSAGE = 'MERGE_MESSAGE',
    }

    /**
     * The default value for a squash merge commit message:
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    export enum squash_merge_commit_message {
        PR_BODY = 'PR_BODY',
        COMMIT_MESSAGES = 'COMMIT_MESSAGES',
        BLANK = 'BLANK',
    }

    /**
     * The default value for a squash merge commit title:
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    export enum squash_merge_commit_title {
        PR_TITLE = 'PR_TITLE',
        COMMIT_OR_PR_TITLE = 'COMMIT_OR_PR_TITLE',
    }

    export enum visibility {
        PUBLIC = 'public',
        PRIVATE = 'private',
        INTERNAL = 'internal',
    }

    /**
     * The state of the milestone.
     */
    export enum state {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

