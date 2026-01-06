import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  status?: 'Coming Soon' | 'Available';
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface OriginInfo {
  region: string;
  title: string;
  description: string;
  details: string[];
}