import classes from './rightBar.module.css'
import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.text}>
          <span className={classes.notification}>Who am I?</span>
          <h3 className={classes.title}>I am a front-end developer.</h3>
          <p className={classes.desc}>
            I&apos;m a skilled software developer with experience in TypeScript
            and JavaScript, and expertise in frameworks like Vue and React.
          </p>
          <Link
            className={classes.button}
            href='https://3d-personal-profile.vercel.app/'>
            More <MdArrowForward />
          </Link>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.text}>
          <span className={classes.notification}>Job intention</span>
          <h3 className={classes.title}>
            I&apos;m looking for a front-end remote development job.
          </h3>
          <p className={classes.desc}>
            I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let&apos;s work together to bring your ideas to
            life!
          </p>
          <Link
            className={classes.button}
            href='https://3d-personal-profile.vercel.app/#contact'>
            Contact Me <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
