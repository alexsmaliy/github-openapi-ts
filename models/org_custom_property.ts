/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Custom property defined on an organization
 */
export type org_custom_property = {
    /**
     * The name of the property
     */
    property_name: string;
    /**
     * The type of the value for the property
     */
    value_type: org_custom_property.value_type;
    /**
     * Whether the property is required.
     */
    required?: boolean;
    /**
     * Default value of the property
     */
    default_value?: string | null;
    /**
     * Short description of the property
     */
    description?: string | null;
    /**
     * Ordered list of allowed values of the property
     */
    allowed_values?: Array<string> | null;
};

export namespace org_custom_property {

    /**
     * The type of the value for the property
     */
    export enum value_type {
        STRING = 'string',
        SINGLE_SELECT = 'single_select',
    }


}

