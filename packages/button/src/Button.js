import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({ children, ...props }) => {
  const {
    className,

    // Styles.
    primary,
    link,

    // Colors
    success,
    error,

    // Sizes
    block,
    small,
    large,
    action,
    circle,

    // States
    active,
    loading,
    ...otherProps
  } = props

  const classNames = cn(
    'btn',
    {
      'btn-primary': primary,
      'btn-link': link,
      'btn-success': success,
      'btn-error': error,
      'btn-block': block,
      'btn-sm': small,
      'btn-lg': large,
      'btn-action': action || circle,
      circle: circle,
      active: active,
      loading: loading
    },
    className
  )

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.bool,
  link: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  action: PropTypes.bool,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool
}

export { Button }