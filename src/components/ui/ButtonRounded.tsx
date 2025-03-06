import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '@/theme/theme';

export default function ButtonRounded({ label }: { label: string }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: colors.secondary,
        color: colors.textSecondary,
        fontWeight: 'bold',
        fontSize: '14px',
        width: 'auto',
        height: 'auto',
        textTransform: 'uppercase',
        borderRadius: '20px',
        display: 'flex',
        margin: '20px auto',
        alignItems: 'center',
        boxShadow: 'none',
        gap: '5px',
        '&:hover': {
          backgroundColor: colors.secondaryLighter,
          boxShadow: 'none',
        },
      }}
      endIcon={<ArrowForwardIosIcon sx={{ fontSize: '14px' }} />}
    >
      {label}
    </Button>
  );
}
