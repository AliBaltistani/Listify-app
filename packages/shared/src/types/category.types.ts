// ============================================================
// @listify/shared — Category Types
// ============================================================

export enum FieldType {
    TEXT = 'text',
    NUMBER = 'number',
    SELECT = 'select',
    MULTI_SELECT = 'multi_select',
    TOGGLE = 'toggle',
    DATE = 'date',
    COLOR = 'color',
    RANGE = 'range',
}

export interface CategoryField {
    id: string;
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required: boolean;
    options?: string[];
    min?: number;
    max?: number;
    order: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    image?: string;
    parentId: string | null;
    fields: CategoryField[];
    listingsCount: number;
    order: number;
    isActive: boolean;
    children?: Category[];
}
