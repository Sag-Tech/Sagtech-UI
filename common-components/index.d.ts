import * as React$1 from 'react';
import React__default, { DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler, SVGProps, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type VariantTypoTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type VariantTypoTagsStyles = 'BodyL' | 'BodyM' | 'BodyS' | 'Labels' | 'LabelsS' | 'Info' | 'InfoBold' | 'Buttons' | 'ButtonsS' | 'ButtonsSBold';
type VariantTypoColors = 'text-black_1' | 'text-black_2' | 'text-black_3' | 'text-black_4' | 'text-grey_1' | 'text-grey_2' | 'text-grey_3' | 'text-grey_4' | 'text-white_1' | 'text-white_2' | 'text-white_3' | 'text-white_4' | 'text-white' | 'text-pr_purple' | 'text-sec_purple' | 'text-pr_blue' | 'text-sec_blue' | 'text-error' | 'text-warning' | 'text-success';

interface ButtonTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loadingType?: boolean;
    text?: string;
    buttonSize?: 'small' | 'large' | 'tabSize';
    variant?: 'primary' | 'secondary' | 'tabButton';
    useIcon?: boolean;
    stateOfButton?: 'default' | 'active';
    classes?: string;
    hoverOff?: boolean;
    changeColor?: boolean;
    children?: React__default.ReactNode;
    typeText?: VariantTypoTagsStyles;
    onClick?: MouseEventHandler;
}

interface TypographyTypes {
    text?: string;
    className?: string;
    children?: React__default.ReactNode;
    tag?: VariantTypoTags;
    type?: VariantTypoTagsStyles;
    color?: VariantTypoColors;
}

interface IAttachIconProps$M extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Arrow({ color, ...rest }: IAttachIconProps$M): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$L extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function AttachIcon$1({ color, ...rest }: IAttachIconProps$L): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$K extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function CallIcon({ color, ...rest }: IAttachIconProps$K): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$J extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Chevrondown({ color, ...rest }: IAttachIconProps$J): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$I extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function CloseIcon({ color, ...rest }: IAttachIconProps$I): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$H extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function ErrorIcon({ color, ...rest }: IAttachIconProps$H): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$G extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function FacebookIcon({ color, ...rest }: IAttachIconProps$G): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$F extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function GitIcon({ color, ...rest }: IAttachIconProps$F): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$E extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function AttachIcon({ color, ...rest }: IAttachIconProps$E): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$D extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Loading({ color, ...rest }: IAttachIconProps$D): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$C extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function LocationIcon({ color, ...rest }: IAttachIconProps$C): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$B extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function MailIcon({ color, ...rest }: IAttachIconProps$B): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$A extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function PgIcon({ color, ...rest }: IAttachIconProps$A): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$z extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Project({ color, ...rest }: IAttachIconProps$z): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$y extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function SocilaIcon({ color, ...rest }: IAttachIconProps$y): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$x extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function SphereIcon({ color, ...rest }: IAttachIconProps$x): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$w extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Succes({ color, ...rest }: IAttachIconProps$w): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$v extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function FastAPI({ color, ...rest }: IAttachIconProps$v): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$u extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function AWSLambda({ color, ...rest }: IAttachIconProps$u): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$t extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Fastify({ color, ...rest }: IAttachIconProps$t): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$s extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Flutter({ color, ...rest }: IAttachIconProps$s): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$r extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Kotlin({ color, ...rest }: IAttachIconProps$r): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$q extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Android({ color, ...rest }: IAttachIconProps$q): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$p extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Go({ color, ...rest }: IAttachIconProps$p): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$o extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function MySQL({ color, ...rest }: IAttachIconProps$o): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$n extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function PostgreSQL({ color, ...rest }: IAttachIconProps$n): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$m extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function MongoDB({ color, ...rest }: IAttachIconProps$m): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$l extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Redis({ color, ...rest }: IAttachIconProps$l): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$k extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Docker({ color, ...rest }: IAttachIconProps$k): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$j extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Kubernetes({ color, ...rest }: IAttachIconProps$j): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$i extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Ethereum({ color, ...rest }: IAttachIconProps$i): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$h extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Polygon({ color, ...rest }: IAttachIconProps$h): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$g extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function AWS({ color, ...rest }: IAttachIconProps$g): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$f extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function GCP({ color, ...rest }: IAttachIconProps$f): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$e extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function DigitalOcean({ color, ...rest }: IAttachIconProps$e): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$d extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function AWSLambda2({ color, ...rest }: IAttachIconProps$d): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$c extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function TensorFlow({ color, ...rest }: IAttachIconProps$c): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$b extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function PyTorch({ color, ...rest }: IAttachIconProps$b): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$a extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Django({ color, ...rest }: IAttachIconProps$a): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$9 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function NestJS({ color, ...rest }: IAttachIconProps$9): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$8 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Javascript({ color, ...rest }: IAttachIconProps$8): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$7 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Typescript({ color, ...rest }: IAttachIconProps$7): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$6 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function NodeJS({ color, ...rest }: IAttachIconProps$6): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$5 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function React({ color, ...rest }: IAttachIconProps$5): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$4 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function GraphQL({ color, ...rest }: IAttachIconProps$4): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$3 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Solidity({ color, ...rest }: IAttachIconProps$3): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$2 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function Python({ color, ...rest }: IAttachIconProps$2): react_jsx_runtime.JSX.Element;

interface IAttachIconProps$1 extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function VueJS({ color, ...rest }: IAttachIconProps$1): react_jsx_runtime.JSX.Element;

interface IAttachIconProps extends SVGProps<SVGSVGElement> {
    color: string;
}
declare function HistoryPoint({ color, ...rest }: IAttachIconProps): react_jsx_runtime.JSX.Element;

declare const content: {
    attach: typeof AttachIcon$1;
    project: typeof Project;
    loading: typeof Loading;
    paginationArrow: typeof PgIcon;
    succes: typeof Succes;
    arrow: typeof Arrow;
    error: typeof ErrorIcon;
    chevrondown: typeof Chevrondown;
    close: typeof CloseIcon;
    sphere: typeof SphereIcon;
    mail: typeof MailIcon;
    call: typeof CallIcon;
    location: typeof LocationIcon;
    git: typeof GitIcon;
    inst: typeof AttachIcon;
    social: typeof SocilaIcon;
    facebook: typeof FacebookIcon;
    AWSLambda: typeof AWSLambda;
    FastAPI: typeof FastAPI;
    Fastify: typeof Fastify;
    Flutter: typeof Flutter;
    Kotlin: typeof Kotlin;
    Android: typeof Android;
    Go: typeof Go;
    MySQL: typeof MySQL;
    PostgreSQL: typeof PostgreSQL;
    MongoDB: typeof MongoDB;
    Redis: typeof Redis;
    Docker: typeof Docker;
    Kubernetes: typeof Kubernetes;
    Ethereum: typeof Ethereum;
    Polygon: typeof Polygon;
    AWS: typeof AWS;
    GCP: typeof GCP;
    DigitalOcean: typeof DigitalOcean;
    AWSLambda2: typeof AWSLambda2;
    TensorFlow: typeof TensorFlow;
    PyTorch: typeof PyTorch;
    Django: typeof Django;
    NestJS: typeof NestJS;
    Javascript: typeof Javascript;
    Typescript: typeof Typescript;
    NodeJS: typeof NodeJS;
    React: typeof React;
    GraphQL: typeof GraphQL;
    Solidity: typeof Solidity;
    Python: typeof Python;
    VueJS: typeof VueJS;
    HistoryPoint: typeof HistoryPoint;
};
type IAvailableIcons = keyof typeof content;

interface IIconProps {
    svgProps?: SVGProps<SVGSVGElement>;
    icon: IAvailableIcons;
    size?: number;
    height?: number;
    color?: string;
    viewBox?: string;
    className?: string;
    text?: string;
    classes?: string;
}

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
declare const ModalContext: React$1.Context<ContextProps>;
declare const ModalContextProvider: ({ children }: ProviderProps) => JSX.Element;

export { ButtonTypes, CustomSelectProps, IAvailableIcons, IIconProps, ModalContext, ModalContextProvider, Option, TColorsValues, TypographyTypes, content };
