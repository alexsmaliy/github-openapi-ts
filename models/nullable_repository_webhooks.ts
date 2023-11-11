/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nullable_license_simple } from './nullable_license_simple';
import type { nullable_simple_user } from './nullable_simple_user';
import type { simple_user } from './simple_user';

/**
 * The repository on GitHub where the event occurred. Webhook payloads contain the `repository` property
 * when the event occurs from activity in a repository.
 */
export type nullable_repository_webhooks = {
    /**
     * Unique identifier of the repository
     */
    id: number;
    node_id: string;
    /**
     * The name of the repository.
     */
    name: string;
    full_name: string;
    license: nullable_license_simple;
    organization?: nullable_simple_user;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    owner: simple_user;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    /**
     * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size: number;
    /**
     * The default branch of the repository.
     */
    default_branch: string;
    open_issues_count: number;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    is_template?: boolean;
    topics?: Array<string>;
    /**
     * The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.
     */
    custom_properties?: Record<string, any>;
    /**
     * Whether issues are enabled.
     */
    has_issues: boolean;
    /**
     * Whether projects are enabled.
     */
    has_projects: boolean;
    /**
     * Whether the wiki is enabled.
     */
    has_wiki: boolean;
    has_pages: boolean;
    /**
     * Whether downloads are enabled.
     */
    has_downloads: boolean;
    /**
     * Whether discussions are enabled.
     */
    has_discussions?: boolean;
    /**
     * Whether the repository is archived.
     */
    archived: boolean;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    pushed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allow_rebase_merge?: boolean;
    template_repository?: {
        id?: number;
        node_id?: string;
        name?: string;
        full_name?: string;
        owner?: {
            login?: string;
            id?: number;
            node_id?: string;
            avatar_url?: string;
            gravatar_id?: string;
            url?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            repos_url?: string;
            events_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
        };
        private?: boolean;
        html_url?: string;
        description?: string;
        fork?: boolean;
        url?: string;
        archive_url?: string;
        assignees_url?: string;
        blobs_url?: string;
        branches_url?: string;
        collaborators_url?: string;
        comments_url?: string;
        commits_url?: string;
        compare_url?: string;
        contents_url?: string;
        contributors_url?: string;
        deployments_url?: string;
        downloads_url?: string;
        events_url?: string;
        forks_url?: string;
        git_commits_url?: string;
        git_refs_url?: string;
        git_tags_url?: string;
        git_url?: string;
        issue_comment_url?: string;
        issue_events_url?: string;
        issues_url?: string;
        keys_url?: string;
        labels_url?: string;
        languages_url?: string;
        merges_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        pulls_url?: string;
        releases_url?: string;
        ssh_url?: string;
        stargazers_url?: string;
        statuses_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        tags_url?: string;
        teams_url?: string;
        trees_url?: string;
        clone_url?: string;
        mirror_url?: string;
        hooks_url?: string;
        svn_url?: string;
        homepage?: string;
        language?: string;
        forks_count?: number;
        stargazers_count?: number;
        watchers_count?: number;
        size?: number;
        default_branch?: string;
        open_issues_count?: number;
        is_template?: boolean;
        topics?: Array<string>;
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        allow_rebase_merge?: boolean;
        temp_clone_token?: string;
        allow_squash_merge?: boolean;
        allow_auto_merge?: boolean;
        delete_branch_on_merge?: boolean;
        allow_update_branch?: boolean;
        use_squash_pr_title_as_default?: boolean;
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: nullable_repository_webhooks.squash_merge_commit_title;
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: nullable_repository_webhooks.squash_merge_commit_message;
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: nullable_repository_webhooks.merge_commit_title;
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: nullable_repository_webhooks.merge_commit_message;
        allow_merge_commit?: boolean;
        subscribers_count?: number;
        network_count?: number;
    } | null;
    temp_clone_token?: string;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allow_squash_merge?: boolean;
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allow_auto_merge?: boolean;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean;
    /**
     * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
     */
    allow_update_branch?: boolean;
    /**
     * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     * @deprecated
     */
    use_squash_pr_title_as_default?: boolean;
    /**
     * The default value for a squash merge commit title:
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squash_merge_commit_title?: nullable_repository_webhooks.squash_merge_commit_title;
    /**
     * The default value for a squash merge commit message:
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squash_merge_commit_message?: nullable_repository_webhooks.squash_merge_commit_message;
    /**
     * The default value for a merge commit title.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    merge_commit_title?: nullable_repository_webhooks.merge_commit_title;
    /**
     * The default value for a merge commit message.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    merge_commit_message?: nullable_repository_webhooks.merge_commit_message;
    /**
     * Whether to allow merge commits for pull requests.
     */
    allow_merge_commit?: boolean;
    /**
     * Whether to allow forking this repo
     */
    allow_forking?: boolean;
    /**
     * Whether to require contributors to sign off on web-based commits
     */
    web_commit_signoff_required?: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
    starred_at?: string;
    /**
     * Whether anonymous git access is enabled for this repository
     */
    anonymous_access_enabled?: boolean;
};

export namespace nullable_repository_webhooks {

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


}

