import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className={'notFound'}>
      <div className="container">
        <div className="notFound__wrap">
          <p className="notFound__404">404</p>
          <p className="notFound__title">Page Not Found</p>
          <p className="notFound__text">
            The page you requested could not be found within our application or
            could not be delivered at this time.
          </p>
          <p>
            Please go back to the
            <NavLink exact to={'/'}>
              Overview Page
            </NavLink>
            and try again. If this problem persists please contact an
            administrator.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFound
