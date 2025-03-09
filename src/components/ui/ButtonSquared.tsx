'use client';

import { Button } from '@mui/material';
import { colors } from '@/theme/theme';
import { ReactNode } from 'react';

interface ButtonSquaredProps {
  label: ReactNode;
  onClick?: () => void;
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  border?: string;
  margin?: string;
}

export default function ButtonSquared({
  label,
  onClick,
  textTransform = 'none',
  fontSize = '14px',
  fontWeight = 'bold',
  color = colors.textSecondary,
  border = 'none',
  margin = '15px auto',
}: ButtonSquaredProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: colors.secondary,
        color,
        fontWeight,
        fontSize,
        textTransform,
        display: 'flex',
        alignItems: 'center',
        border,
        boxShadow: 'none',
        gap: '5px',
        margin,
        '&:hover': {
          backgroundColor: colors.secondaryLighter,
          boxShadow: 'none',
        },
      }}
    >
      {label}
    </Button>
  );
}
