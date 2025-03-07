'use client';

import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '@/theme/theme';
import { ReactNode } from 'react';

const handleCopy = () => {
  navigator.clipboard.writeText('FIRST5');
  alert('Coupon code copied!');
};

export default function ButtonSquared({
  label,
  onClick,
  textTransform = 'none',
  fontSize = '14px',
  fontWeight = 'bold',
  color = colors.textSecondary,
  border = 'none',
}: {
  label: ReactNode;
  onClick?: () => void;
  textTransform: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  border?: string;
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: colors.secondary,
        color,
        fontWeight,
        fontSize,
        width: 'auto',
        height: 'auto',
        textTransform,
        display: 'flex',
        margin: '15px auto',
        alignItems: 'center',
        border,
        boxShadow: 'none',
        gap: '5px',
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
