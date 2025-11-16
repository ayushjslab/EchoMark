"use client"
import FeedbackCustomizer from '@/components/custom/customization'
import { useParams } from 'next/navigation';

const CustomizePage = () => {
      const { websiteId } = useParams();
  return (
      <FeedbackCustomizer websiteId={websiteId as string} />
  );
}

export default CustomizePage
