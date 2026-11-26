import { LucideGraduationCap, LucideMapPin } from 'lucide-react';

function AboutPage() {
  return (
    <div className='py-10 text-base sm:py-16 sm:text-lg'>
      {/* Header */}
      <div>
        <h1 className='font-heading text-2xl sm:text-4xl'>
          Hi, I&apos;m Mohamed (aka{' '}
          <span className='underline'>
            <span className='text-green-500 underline'>0x</span>
            Slayver
          </span>
          ) <br /> I build cool stuff
        </h1>
        <span className='text-muted-foreground text-base italic'>
          Or at least i&apos;m trying :)
        </span>
        {/* Introduction */}
        <p className='mt-2.5 max-w-150 font-normal tracking-wide'>
          I have a strong curiosity for tech and computer science &ndash; mostly
          understanding how systems work from the inside out and exploring
          topics that pull me in. Still learning, still exploring, and building
          things to make sense of it all.
        </p>
      </div>
      {/* Info */}
      <div className='mt-3 flex flex-col gap-2 sm:gap-1'>
        <div className='flex items-center gap-2.5'>
          <LucideMapPin />
          <p>Egypt</p>
        </div>
        <div className='flex items-center gap-2.5'>
          <LucideGraduationCap />
          <p>Management Information System &ndash; 3rd Year</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
