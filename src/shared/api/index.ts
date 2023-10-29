/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Filial */
export interface Filial {
    /**
     * ИД
     * ...
     * @exclusiveMin 0
     */
    id: number;
    /**
     * Наименование
     * ...
     * @maxLength 55
     */
    name: string;
}

/** Menu */
export interface Menu {
    /**
     * ИД
     * ...
     * @exclusiveMin 0
     */
    id: number;
    /**
     * Наименование
     * ...
     * @maxLength 255
     */
    name: string;
    /** Филиал */
    filial: Filial;
    /** Торговая точка */
    tt: TT;
    /** Активность */
    active: boolean;
    /** Экспорт */
    export: string[];
}

/** PaginatorMenu */
export interface PaginatorMenu {
    /**
     * Количество страниц
     * @exclusiveMin 0
     */
    max_pages: number;
    /** Data */
    data: Menu[];
}

/** TT */
export interface TT {
    /**
     * ИД
     * ...
     * @exclusiveMin 0
     */
    id: number;
    /**
     * Наименование
     * ...
     * @maxLength 55
     */
    name: string;
}
