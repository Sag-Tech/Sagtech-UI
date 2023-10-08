import Arrow from './Arrow'
import AttachIcon from './AttachIcon'
import CallIcon from './CallIcon'
import Chevrondown from './Chevrondown'
import CloseIcon from './CloseIcon'
import ErrorIcon from './ErrorIcon'
import FacebookIcon from './FacebookIcon'
import GitIcon from './GitIcon'
import InstIcon from './InstIcon'
import Loading from './Loading'
import LocationIcon from './LocationIcon'
import MailIcon from './MailIcon'
import PgIcon from './PaginationArrow'
import Project from './Project'
import SocilaIcon from './SocialIcon'
import SphereIcon from './SphereIcon'
import Succes from './SuccesIcon'
import FastAPI from './stack/FastAPI'
import AWSLambda from './stack/AWSLambda'
import Fastify from './stack/Fastify'
import Flutter from './stack/Flutter'
import Kotlin from './stack/Kotlin'
import Android from './stack/Android'
import Go from './stack/Go'
import MySQL from './stack/MySQL'
import PostgreSQL from './stack/PostgreSQL'
import MongoDB from './stack/MongoDB'
import Redis from './stack/Redis'
import Docker from './stack/Docker'
import Kubernetes from './stack/Kubernetes'
import Ethereum from './stack/Ethereum'
import Polygon from './stack/Polygon'
import AWS from './stack/AWS'
import GCP from './stack/GCP'
import DigitalOcean from './stack/DigitalOcean'
import AWSLambda2 from './stack/AWSLambda2'
import TensorFlow from './stack/TensorFlow'
import PyTorch from './stack/PyTorch'
import Django from './stack/Django'
import NestJS from './stack/NestJS'
import Javascript from './stack/Javascript'
import Typescript from './stack/Typescript'
import NodeJS from './stack/NodeJS'
import React from './stack/React'
import GraphQL from './stack/GraphQL'
import Solidity from './stack/Solidity'
import Python from './stack/Python'
import VueJS from './stack/VueJS'
import HistoryPoint from './HistoryPoint'
import SliderButton from './SliderButton'

export const content = {
  attach: AttachIcon,
  project: Project,
  loading: Loading,
  paginationArrow: PgIcon,
  succes: Succes,
  arrow: Arrow,
  error: ErrorIcon,
  chevrondown: Chevrondown,
  close: CloseIcon,
  sphere: SphereIcon,
  mail: MailIcon,
  call: CallIcon,
  location: LocationIcon,
  git: GitIcon,
  inst: InstIcon,
  social: SocilaIcon,
  facebook: FacebookIcon,
  AWSLambda,
  FastAPI,
  Fastify,
  Flutter,
  Kotlin,
  Android,
  Go,
  MySQL,
  PostgreSQL,
  MongoDB,
  Redis,
  Docker,
  Kubernetes,
  Ethereum,
  Polygon,
  AWS,
  GCP,
  DigitalOcean,
  AWSLambda2,
  TensorFlow,
  PyTorch,
  Django,
  NestJS,
  Javascript,
  Typescript,
  NodeJS,
  React,
  GraphQL,
  Solidity,
  Python,
  VueJS,
  HistoryPoint,
  button: SliderButton,
}

export type IAvailableIcons = keyof typeof content
