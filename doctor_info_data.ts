import { emitWarning } from "process";

export interface Doctor {
  id: number;
  name: string;
  occupation: string;
  experience: number;
  location: string;
  imageUrl: string;
  biography: string
  skills: string
  phone: number
  email: string
  certificate: string
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Jessica Joan',
    occupation: 'Nephrology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/jess.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'Working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'Jessica@joan.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  
  {
    id: 2,
    name: 'Dr. Alexandra',
    occupation: 'Gastroenterology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/alex.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'Working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'alex@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 3,
    name: 'Dr. Kimberly',
    occupation: 'Neurology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/kim.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'kim@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 4,
    name: 'Dr. Bella Carol',
    occupation: 'Obstetrics',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/bella.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'bella@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 5,
    name: 'Dr. Rebecca Rose',
    occupation: 'Gynecology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/rebecca.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'rebecca@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 6,
    name: 'Dr. Stephanie Sue',
    occupation: 'Haematology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/step.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'stephanie@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 7,
    name: 'Dr. Penelope',
    occupation: 'Physiotherapy',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/pene.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'penelope@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
  {
    id: 8, 
    name: 'Dr. Lauren Leah',
    occupation: 'Oncology',
    experience: 20,
    location: '380 Albert ST, Melbourne',
    imageUrl: '/lauren.png',
    biography: 'Lorem ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). it uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.',
    skills: 'working with both children and adults',
    phone: +1-(230)-369-155-23,
    email: 'lauren@gmail.com',
    certificate: 'Robert L. Nobel Price, Edison Awards'
  },
];

export default doctors;