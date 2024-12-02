import React from 'react';
import Logo from './Logo';
import AnchorLink from './AnchorLink';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Parv learning Auth
    </h1>

    <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
    </AnchorLink>
    {/*  */}
    <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log out
    </AnchorLink>

    <p className="lead" data-testid="hero-lead">
      Checkout my portfolio{' '}
      <a href="https://parv-gugnani.vercel.app/">Parv.js</a>
    </p>
  </div>
);

export default Hero;
