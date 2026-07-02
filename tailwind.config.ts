import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#071a33', ink: '#0b1220', orange: '#f97316' }, boxShadow: { glow: '0 24px 80px rgba(249,115,22,.18)' } } }, plugins: [] };
export default config;
