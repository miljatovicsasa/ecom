'use client';

import { colors } from '@/theme/theme';
import ButtonSquared from './ButtonSquared';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function PromotionButton() {
  const handleCopy = () => {
    navigator.clipboard.writeText('FIRST5');
    alert('Coupon code copied!');
  };

  return (
    <ButtonSquared
      label={
        <>
          Copy Coupon Code: <strong style={{ marginLeft: 5 }}>FIRST5</strong>
          {<ContentCopyIcon sx={{ fontSize: '14px' }} />}
        </>
      }
      onClick={handleCopy}
      fontSize="10px"
      textTransform="none"
      color={colors.textPrimary}
      border="1px solid #000"
    />
  );
}
