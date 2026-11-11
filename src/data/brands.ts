import anjoVerniz2 from '../assets/images/produtos/anjoVerniz2.webp';
import lazzudur from '../assets/images/produtos/lazzudur.webp';
import nexus from '../assets/images/produtos/nexus.webp';
import nsw from '../assets/images/produtos/nsw.webp';
import pistolaDePintura from '../assets/images/produtos/pistola-de-pintura.webp';
import type { Brand } from '../types/product';

export const brands: Brand[] = [
  {
    id: 'anjo',
    name: 'Anjo Tintas',
    description: 'Vernizes PU e produtos complementares para acabamento automotivo.',
    image: anjoVerniz2,
  },
  {
    id: 'sherwin-williams',
    name: 'Sherwin-Williams',
    description: 'Linha automotiva completa: primers, vernizes e clearcoats de alta performance.',
    image: lazzudur,
  },
  {
    id: 'nexus',
    name: 'Nexus',
    description: 'Linha automotiva de primers e produtos de preparação de superfície.',
    image: nexus,
  },
  {
    id: 'nsw',
    name: 'NSW',
    description: 'Produtos de acabamento e proteção, como ceras e polimentos premium.',
    image: nsw,
  },
  {
    id: 'pdr',
    name: 'PDR',
    description: 'Ferramentas pneumáticas e pistolas profissionais para pintura.',
    image: pistolaDePintura,
  },
];
