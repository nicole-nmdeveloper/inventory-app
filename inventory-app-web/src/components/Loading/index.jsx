import React from 'react'
import PropTypes from 'prop-types'
import { motion, easeOut } from 'framer-motion'

import { Container, Circle } from './styled'

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>

  const circleTransition = {
    duration: 1,
    delay: 0.5,
    ease: easeOut,
    repeat: Infinity,
    repeatType: 'reverse',
  }

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={circleTransition}
      >
        <div>
          <Circle />
          <Circle />
          <Circle />
        </div>
      </motion.div>
    </Container>
  )
}

Loading.defaultProps = {
  isLoading: false,
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}
