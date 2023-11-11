/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configuration for code scanning default setup.
 */
export type code_scanning_default_setup_update = {
    /**
     * The desired state of code scanning default setup.
     */
    state?: code_scanning_default_setup_update.state;
    /**
     * CodeQL query suite to be used.
     */
    query_suite?: code_scanning_default_setup_update.query_suite;
    /**
     * CodeQL languages to be analyzed.
     */
    languages?: Array<'c-cpp' | 'csharp' | 'go' | 'java-kotlin' | 'javascript-typescript' | 'python' | 'ruby' | 'swift'>;
};

export namespace code_scanning_default_setup_update {

    /**
     * The desired state of code scanning default setup.
     */
    export enum state {
        CONFIGURED = 'configured',
        NOT_CONFIGURED = 'not-configured',
    }

    /**
     * CodeQL query suite to be used.
     */
    export enum query_suite {
        DEFAULT = 'default',
        EXTENDED = 'extended',
    }


}

