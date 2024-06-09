import React from 'react';

interface HtmlContentPageProps {
  data: string;
}

const HtmlContentPage: React.FC<HtmlContentPageProps> = ({ data }) => {
  return (
    <div className='mt-[30px]'>
      <div className='flex items-end gap-x-2'>
        <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>Chủ đề</h2>
        <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
      </div>
      <div className='mt-4 flex flex-col gap-y-4'>
        <div className='w-full'>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </div>
  );
}

export default HtmlContentPage;
