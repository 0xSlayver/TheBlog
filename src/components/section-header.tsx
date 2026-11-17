type SectionHeaderPropsTypes = {
  title: string;
  description?: string;
};

function SectionHeader({ title, description }: SectionHeaderPropsTypes) {
  return (
    <div className='flex flex-col gap-1 tracking-wide'>
      <h3 className='text-2xl font-semibold sm:text-4xl'>{title}</h3>
      {description && <p className='italic'>{description}</p>}
    </div>
  );
}

export default SectionHeader;
