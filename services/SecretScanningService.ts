/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { alert_number } from '../models/alert_number';
import type { organization_secret_scanning_alert } from '../models/organization_secret_scanning_alert';
import type { secret_scanning_alert } from '../models/secret_scanning_alert';
import type { secret_scanning_alert_resolution } from '../models/secret_scanning_alert_resolution';
import type { secret_scanning_alert_resolution_comment } from '../models/secret_scanning_alert_resolution_comment';
import type { secret_scanning_alert_state } from '../models/secret_scanning_alert_state';
import type { secret_scanning_location } from '../models/secret_scanning_location';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SecretScanningService {

    /**
     * List secret scanning alerts for an enterprise
     * Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
     * To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
     * @param enterprise The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     * @param state Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
     * @param secretType A comma-separated list of secret types to return. By default all secret types are returned.
     * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
     * for a complete list of secret types.
     * @param resolution A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
     * @param sort The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
     * @param direction The direction to sort the results by.
     * @param perPage The number of results per page (max 100).
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.
     * @param validity A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are `active`, `inactive`, and `unknown`.
     * @returns organization_secret_scanning_alert Response
     * @throws ApiError
     */
    public static secretScanningListAlertsForEnterprise(
        enterprise: string,
        state?: 'open' | 'resolved',
        secretType?: string,
        resolution?: string,
        sort: 'created' | 'updated' = 'created',
        direction: 'asc' | 'desc' = 'desc',
        perPage: number = 30,
        before?: string,
        after?: string,
        validity?: string,
    ): CancelablePromise<Array<organization_secret_scanning_alert>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprises/{enterprise}/secret-scanning/alerts',
            path: {
                'enterprise': enterprise,
            },
            query: {
                'state': state,
                'secret_type': secretType,
                'resolution': resolution,
                'sort': sort,
                'direction': direction,
                'per_page': perPage,
                'before': before,
                'after': after,
                'validity': validity,
            },
            errors: {
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List secret scanning alerts for an organization
     * Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
     * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     * @param org The organization name. The name is not case sensitive.
     * @param state Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
     * @param secretType A comma-separated list of secret types to return. By default all secret types are returned.
     * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
     * for a complete list of secret types.
     * @param resolution A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
     * @param sort The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
     * @param direction The direction to sort the results by.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
     * @param validity A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are `active`, `inactive`, and `unknown`.
     * @returns organization_secret_scanning_alert Response
     * @throws ApiError
     */
    public static secretScanningListAlertsForOrg(
        org: string,
        state?: 'open' | 'resolved',
        secretType?: string,
        resolution?: string,
        sort: 'created' | 'updated' = 'created',
        direction: 'asc' | 'desc' = 'desc',
        page: number = 1,
        perPage: number = 30,
        before?: string,
        after?: string,
        validity?: string,
    ): CancelablePromise<Array<organization_secret_scanning_alert>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/secret-scanning/alerts',
            path: {
                'org': org,
            },
            query: {
                'state': state,
                'secret_type': secretType,
                'resolution': resolution,
                'sort': sort,
                'direction': direction,
                'page': page,
                'per_page': perPage,
                'before': before,
                'after': after,
                'validity': validity,
            },
            errors: {
                404: `Resource not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List secret scanning alerts for a repository
     * Lists secret scanning alerts for an eligible repository, from newest to oldest.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param state Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
     * @param secretType A comma-separated list of secret types to return. By default all secret types are returned.
     * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
     * for a complete list of secret types.
     * @param resolution A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
     * @param sort The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
     * @param direction The direction to sort the results by.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @param before A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.
     * @param after A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
     * @param validity A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are `active`, `inactive`, and `unknown`.
     * @returns secret_scanning_alert Response
     * @throws ApiError
     */
    public static secretScanningListAlertsForRepo(
        owner: string,
        repo: string,
        state?: 'open' | 'resolved',
        secretType?: string,
        resolution?: string,
        sort: 'created' | 'updated' = 'created',
        direction: 'asc' | 'desc' = 'desc',
        page: number = 1,
        perPage: number = 30,
        before?: string,
        after?: string,
        validity?: string,
    ): CancelablePromise<Array<secret_scanning_alert>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/secret-scanning/alerts',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'secret_type': secretType,
                'resolution': resolution,
                'sort': sort,
                'direction': direction,
                'page': page,
                'per_page': perPage,
                'before': before,
                'after': after,
                'validity': validity,
            },
            errors: {
                404: `Repository is public or secret scanning is disabled for the repository`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * Get a secret scanning alert
     * Gets a single secret scanning alert detected in an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @returns secret_scanning_alert Response
     * @throws ApiError
     */
    public static secretScanningGetAlert(
        owner: string,
        repo: string,
        alertNumber: alert_number,
    ): CancelablePromise<secret_scanning_alert> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            errors: {
                304: `Not modified`,
                404: `Repository is public, or secret scanning is disabled for the repository, or the resource is not found`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * Update a secret scanning alert
     * Updates the status of a secret scanning alert in an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @param requestBody
     * @returns secret_scanning_alert Response
     * @throws ApiError
     */
    public static secretScanningUpdateAlert(
        owner: string,
        repo: string,
        alertNumber: alert_number,
        requestBody: {
            state: secret_scanning_alert_state;
            resolution?: secret_scanning_alert_resolution;
            resolution_comment?: secret_scanning_alert_resolution_comment;
        },
    ): CancelablePromise<secret_scanning_alert> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, resolution comment is invalid or the resolution was not changed.`,
                404: `Repository is public, or secret scanning is disabled for the repository, or the resource is not found`,
                422: `State does not match the resolution or resolution comment`,
                503: `Service unavailable`,
            },
        });
    }

    /**
     * List locations for a secret scanning alert
     * Lists all locations for a given secret scanning alert for an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     * @param owner The account owner of the repository. The name is not case sensitive.
     * @param repo The name of the repository without the `.git` extension. The name is not case sensitive.
     * @param alertNumber The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     * @param page Page number of the results to fetch.
     * @param perPage The number of results per page (max 100).
     * @returns secret_scanning_location Response
     * @throws ApiError
     */
    public static secretScanningListLocationsForAlert(
        owner: string,
        repo: string,
        alertNumber: alert_number,
        page: number = 1,
        perPage: number = 30,
    ): CancelablePromise<Array<secret_scanning_location>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations',
            path: {
                'owner': owner,
                'repo': repo,
                'alert_number': alertNumber,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                404: `Repository is public, or secret scanning is disabled for the repository, or the resource is not found`,
                503: `Service unavailable`,
            },
        });
    }

}
