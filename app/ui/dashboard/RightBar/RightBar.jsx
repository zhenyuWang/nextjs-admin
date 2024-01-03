import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { MdArrowForward } from 'react-icons/md'

const RightBar = () => {
  return (
    <div>
      <div className='mb-5 py-5 px-6 rounded-lg bg-gradient-to-t from-[var(--bgSoft)] to-[#253352]'>
        <div className='flex flex-col gap-6'>
          <span className='font-bold'>Who am I?</span>
          <h3>I am a front-end developer.</h3>
          <p className='text-[var(--textSoft)]'>
            I&apos;m a skilled software developer with experience in TypeScript
            and JavaScript, and expertise in frameworks like Vue and React.
          </p>
          <Link target='_blank' href='https://3d-personal-profile.vercel.app/'>
            <Button color='primary' endContent={<MdArrowForward />}>
              More
            </Button>
          </Link>
        </div>
      </div>
      <div className='mb-5 py-5 px-6 rounded-lg bg-gradient-to-t from-[var(--bgSoft)] to-[#253352]'>
        <div className='flex flex-col gap-6'>
          <span className='font-bold'>Job intention</span>
          <h3>I&apos;m looking for a front-end remote development job.</h3>
          <p className='text-[var(--textSoft)]'>
            I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let&apos;s work together to bring your ideas to
            life!
          </p>
          <Link
            target='_blank'
            href='https://3d-personal-profile.vercel.app/#contact'>
            <Button color='primary' endContent={<MdArrowForward />}>
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RightBar
