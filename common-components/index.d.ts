import * as React from 'react';
import React__default, { SVGProps, ReactNode } from 'react';

type VariantTypoTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type VariantTypoTagsStyles = 'BodyL' | 'BodyS' | 'Labels' | 'Info' | 'Buttons';
type VariantTypoColors = 'text-black_1' | 'text-black_2' | 'text-black_3' | 'text-black_4' | 'text-grey_1' | 'text-grey_2' | 'text-grey_3' | 'text-grey_4' | 'text-white_1' | 'text-white_2' | 'text-white_3' | 'text-white_4' | 'text-white' | 'text-pr_purple' | 'text-sec_purple' | 'text-pr_blue' | 'text-sec_blue' | 'text-error' | 'text-warning' | 'text-success';

interface TypographyTypes {
    text?: string;
    tag?: VariantTypoTags;
    type?: VariantTypoTagsStyles;
    color?: VariantTypoColors;
}
declare const Typography: React__default.FC<TypographyTypes>;

declare const content: {
    loading: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    project: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    arrow: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    attach: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    paginatioArrow: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    success: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    error: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    chevrondown: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
};
type IAvailableIcons = keyof typeof content;

interface IIconProps {
    svgProps?: SVGProps<SVGSVGElement>;
    icon: IAvailableIcons;
    size?: number;
    color?: string;
    viewBox?: string;
    className?: string;
}
declare const Icon: React__default.FC<IIconProps>;

interface Option {
    value: string;
    label: string;
}
interface CustomSelectProps {
    options?: Option[];
    state?: 'default' | 'error';
    errorText?: string;
    labelText?: string;
    disabled?: boolean;
    isMenuOpen?: boolean;
    onMenuToggle?: () => void;
}

declare const colors: {
    black_1: string;
    black_2: string;
    black_3: string;
    black_4: string;
    grey_1: string;
    grey_2: string;
    grey_3: string;
    grey_4: string;
    white_1: string;
    white_2: string;
    white_3: string;
    white_4: string;
    white: string;
    pr_purple: string;
    sec_purple: string;
    pr_blue: string;
    sec_blue: string;
    error: string;
    warning: string;
    success: string;
    shape_stroke_1_part_one: string;
    shape_stroke_1_part_two: string;
    shape_stroke_2_part_one: string;
    shape_stroke_2_part_two: string;
};
type TColorsValues = keyof typeof colors;

interface ContextProps {
    isOpen: boolean;
    toggle: () => void;
}
interface ProviderProps {
    children: ReactNode;
}
declare const ModalContext: React.Context<ContextProps>;
declare const ModalContextProvider: ({ children }: ProviderProps) => JSX.Element;

export { CustomSelectProps, IAvailableIcons, IIconProps, Icon, ModalContext, ModalContextProvider, Option, TColorsValues, Typography, TypographyTypes, content };
