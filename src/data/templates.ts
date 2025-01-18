import { ContainerTemplate } from '../types/containers';
import { 
  LayoutGrid, 
  Type, 
  Wallet, 
  Bot,
  Image,
  Video,
  MessageSquare,
  Table,
  BarChart,
  Code
} from 'lucide-react';

export const containerTemplates: ContainerTemplate[] = [
  {
    id: 'text-block',
    name: 'Text Block',
    description: 'Rich text content with customizable styling',
    category: 'content',
    icon: 'Type',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
    },
    jamstackPrompt: 'Create a responsive text block component with customizable typography, spacing, and color schemes. Include support for markdown content and rich text editing capabilities.'
  },
  {
    id: 'grid-layout',
    name: 'Grid Layout',
    description: 'Responsive grid container for organizing content',
    category: 'layout',
    icon: 'LayoutGrid',
    defaultStyles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      padding: '1rem',
    },
    jamstackPrompt: 'Implement a flexible grid layout system with configurable columns, gaps, and responsive breakpoints. Support nested grids and content areas with automatic responsive behavior.'
  },
  {
    id: 'web3-wallet',
    name: 'Web3 Wallet',
    description: 'Connect wallet and display crypto balances',
    category: 'web3',
    icon: 'Wallet',
    defaultStyles: {
      padding: '1.5rem',
      backgroundColor: '#f8fafc',
      borderRadius: '0.75rem',
    },
    jamstackPrompt: 'Build a Web3 wallet component that supports multiple chains (Ethereum, Polygon, etc.), displays balances, and handles transactions. Include MetaMask integration and support for other popular wallet providers.'
  },
  {
    id: 'gemini-chat',
    name: 'Gemini Chat',
    description: 'Interactive AI chat powered by Gemini',
    category: 'ai',
    icon: 'Bot',
    defaultStyles: {
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    jamstackPrompt: 'Create an AI chat interface using Gemini API with support for text and multimodal inputs. Include streaming responses, message history, and configurable AI parameters.'
  }
];