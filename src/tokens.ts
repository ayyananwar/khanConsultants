// Design Tokens - Khan Consultants
// Use this file as a reference for consistent styling across the project

export const designTokens = {
  // Colors
  colors: {
    // Sage - Primary Color System
    sage: {
      50: '#d6fadc',      // Sage Light - Section backgrounds
      100: '#e8f0eb',     // Sage Extra Light - Gradient endpoints
      300: '#b3e5c2',     // Sage Light variant
      500: '#6b9373',     // Sage Medium
      600: '#53785b',     // Sage Primary - Main brand color
      700: '#4a6b50',     // Sage Dark variant
      900: '#2c4d3f',     // Sage Dark - Headings & dark text
      950: '#1a2d23',     // Sage Darkest
    },

    // Accent Greens (lighter sage variants)
    sageAccent: {
      light: '#86ac8d',   // Sage Medium Light - Icon backgrounds, accents
      medium: '#6b9373',  // Sage Medium - Secondary gradients
    },

    // Brand Accent Colors
    brand: {
      blue: '#2563eb',    // Call/Phone/Facebook
      blueHover: '#1d4ed8',
      green: '#16a34a',   // WhatsApp
      greenHover: '#15803d',
      orange: '#ea580c',  // Email/Location
      orangeHover: '#c2410c',
      yellow: '#fbbf24',  // Location alternate
      red: '#ef4444',     // Error
      emerald: '#10b981', // Success
      rose: '#f43f5e',    // Error indicator
    },

    // Neutrals
    neutral: {
      white: '#ffffff',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },

    // Semantic
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Typography
  typography: {
    fontFamily: {
      sans: '"Inter", "Roboto", system-ui, sans-serif',
      serif: 'Georgia, serif',
      mono: '"Courier New", monospace',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '48px'],
      '6xl': ['60px', '60px'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing
  spacing: {
    xs: '4px',      // 0.25rem
    sm: '8px',      // 0.5rem
    md: '16px',     // 1rem
    lg: '24px',     // 1.5rem
    xl: '32px',     // 2rem
    '2xl': '48px',  // 3rem
    '3xl': '64px',  // 4rem
    '4xl': '80px',  // 5rem
  },

  // Border Radius
  borderRadius: {
    none: '0px',
    sm: '4px',
    base: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px', // For buttons
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    dropdown: 10,
    modal: 20,
    tooltip: 30,
    notification: 40,
    header: 50,
  },

  // Breakpoints (for reference - Tailwind handles this)
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Button Variants
export const buttonVariants = {
  primary: {
    backgroundColor: designTokens.colors.sage[600],
    color: designTokens.colors.neutral.white,
    borderRadius: designTokens.borderRadius.full,
    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`,
    transition: designTokens.transitions.base,
    ':hover': {
      backgroundColor: designTokens.colors.sage[700],
    },
  },
  secondary: {
    backgroundColor: designTokens.colors.sage[50],
    color: designTokens.colors.sage[600],
    borderRadius: designTokens.borderRadius.full,
    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`,
    transition: designTokens.transitions.base,
    ':hover': {
      backgroundColor: designTokens.colors.sage[100],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: '2px',
    borderColor: 'currentColor',
    borderRadius: designTokens.borderRadius.full,
    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`,
    transition: designTokens.transitions.base,
    ':hover': {
      opacity: 0.8,
    },
  },
};

// Card Variants
export const cardVariants = {
  default: {
    backgroundColor: designTokens.colors.neutral.white,
    borderColor: designTokens.colors.sage[50],
    borderWidth: '1px',
    borderRadius: designTokens.borderRadius.xl,
    padding: designTokens.spacing['2xl'],
    boxShadow: designTokens.shadows.lg,
    transition: designTokens.transitions.base,
    ':hover': {
      boxShadow: designTokens.shadows.xl,
    },
  },
  sage: {
    backgroundColor: designTokens.colors.sage[600],
    color: designTokens.colors.neutral.white,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: '1px',
    borderRadius: designTokens.borderRadius.xl,
    padding: designTokens.spacing['2xl'],
    boxShadow: designTokens.shadows.lg,
    transition: designTokens.transitions.base,
    ':hover': {
      boxShadow: designTokens.shadows.xl,
    },
  },
  light: {
    backgroundColor: designTokens.colors.sage[50],
    borderColor: designTokens.colors.sage[50],
    borderWidth: '1px',
    borderRadius: designTokens.borderRadius.xl,
    padding: designTokens.spacing['2xl'],
    boxShadow: designTokens.shadows.lg,
    transition: designTokens.transitions.base,
    ':hover': {
      boxShadow: designTokens.shadows.xl,
    },
  },
};

// Section Padding
export const sectionPadding = {
  mobile: {
    paddingTop: designTokens.spacing['2xl'],
    paddingBottom: designTokens.spacing['2xl'],
    paddingLeft: designTokens.spacing.md,
    paddingRight: designTokens.spacing.md,
  },
  tablet: {
    paddingTop: designTokens.spacing['3xl'],
    paddingBottom: designTokens.spacing['3xl'],
    paddingLeft: designTokens.spacing.lg,
    paddingRight: designTokens.spacing.lg,
  },
  desktop: {
    paddingTop: designTokens.spacing['4xl'],
    paddingBottom: designTokens.spacing['4xl'],
    paddingLeft: designTokens.spacing.xl,
    paddingRight: designTokens.spacing.xl,
  },
};

// Typography Presets
export const typographyPresets = {
  h1: {
    fontSize: designTokens.typography.fontSize['6xl'][0],
    lineHeight: designTokens.typography.fontSize['6xl'][1],
    fontWeight: designTokens.typography.fontWeight.bold,
    fontFamily: designTokens.typography.fontFamily.sans,
  },
  h2: {
    fontSize: designTokens.typography.fontSize['5xl'][0],
    lineHeight: designTokens.typography.fontSize['5xl'][1],
    fontWeight: designTokens.typography.fontWeight.bold,
    fontFamily: designTokens.typography.fontFamily.sans,
  },
  h3: {
    fontSize: designTokens.typography.fontSize['4xl'][0],
    lineHeight: designTokens.typography.fontSize['4xl'][1],
    fontWeight: designTokens.typography.fontWeight.bold,
    fontFamily: designTokens.typography.fontFamily.sans,
  },
  body: {
    fontSize: designTokens.typography.fontSize.base[0],
    lineHeight: designTokens.typography.fontSize.base[1],
    fontWeight: designTokens.typography.fontWeight.normal,
    fontFamily: designTokens.typography.fontFamily.sans,
  },
  caption: {
    fontSize: designTokens.typography.fontSize.sm[0],
    lineHeight: designTokens.typography.fontSize.sm[1],
    fontWeight: designTokens.typography.fontWeight.normal,
    fontFamily: designTokens.typography.fontFamily.sans,
  },
};

// Sage Color System - Section Backgrounds
export const sageBackgrounds = {
  light: {
    background: '#d6fadc',      // Light sage for section backgrounds
    heading: '#2c4d3f',         // Dark sage for headings
    text: '#53785b',            // Primary sage for body text
    border: '#d6fadc',          // Sage light border
  },
  dark: {
    background: '#53785b',      // Sage primary for dark sections
    heading: '#ffffff',         // White text
    text: '#ffffff',            // White text
    border: 'rgba(255, 255, 255, 0.1)',  // Subtle white border
  },
  gradient: {
    darkGradient: 'from-[#53785b] to-[#2c4d3f]',      // Dark sage gradient
    lightGradient: 'from-[#d6fadc] to-[#e8f0eb]',     // Light sage gradient
    accentGradient: 'from-[#6b9373] to-[#86ac8d]',    // Accent sage gradient
  },
};

// Brand Color Utilities
export const brandColors = {
  getAvatarColor: (index: number) => {
    const colors = [
      designTokens.colors.brand.blue,
      designTokens.colors.brand.green,
      designTokens.colors.brand.orange,
      designTokens.colors.sage[600],
    ];
    return colors[index % colors.length];
  },
};
