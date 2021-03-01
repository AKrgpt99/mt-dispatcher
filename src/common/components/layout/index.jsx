import React, { Component, createRef } from "react";

import Nav from "./nav";
import TopBar from "./topbar";

class Layout extends Component {
  componentDidMount() {
    const topbar = document.getElementById("topbar");
    const nav = document.getElementById("nav");
    const navLinkTexts = document.getElementsByClassName(
      "ak-nav__toolbar__link__text"
    );

    const startGrowAnimation = () => {
      nav.classList.remove("ak-nav--anim-end");
      nav.classList.remove("ak-nav--anim-init");
      nav.classList.add("ak-nav--anim-start");

      topbar.classList.remove("ak-topbar--anim-end");
      topbar.classList.remove("ak-topbar--anim-init");
      topbar.classList.add("ak-topbar--anim-start");

      for (let i = 0; i < navLinkTexts.length; i++) {
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.remove("ak-nav__toolbar__link__text--anim-end");
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.remove("ak-nav__toolbar__link__text--anim-init");
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.add("ak-nav__toolbar__link__text--anim-start");
      }

      setTimeout(() => {
        nav.classList.remove("ak-nav--anim-start");
        nav.classList.add("ak-nav--anim-final");

        topbar.classList.remove("ak-topbar--anim-start");
        topbar.classList.add("ak-topbar--anim-final");

        for (let i = 0; i < navLinkTexts.length; i++) {
          navLinkTexts
            .namedItem(`nav-link-text-${i}`)
            .classList.remove("ak-nav__toolbar__link__text--anim-start");
          navLinkTexts
            .namedItem(`nav-link-text-${i}`)
            .classList.add("ak-nav__toolbar__link__text--anim-final");
        }
      }, 100);
    };

    const startShrinkAnimation = () => {
      nav.classList.remove("ak-nav--anim-start");
      nav.classList.remove("ak-nav--anim-final");
      nav.classList.add("ak-nav--anim-end");

      topbar.classList.remove("ak-topbar--anim-start");
      topbar.classList.remove("ak-topbar--anim-final");
      topbar.classList.add("ak-topbar--anim-end");

      for (let i = 0; i < navLinkTexts.length; i++) {
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.remove("ak-nav__toolbar__link__text--anim-start");
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.remove("ak-nav__toolbar__link__text--anim-final");
        navLinkTexts
          .namedItem(`nav-link-text-${i}`)
          .classList.add("ak-nav__toolbar__link__text--anim-end");
      }

      setTimeout(() => {
        nav.classList.remove("ak-nav--anim-end");
        nav.classList.add("ak-nav--anim-init");

        topbar.classList.remove("ak-topbar--anim-end");
        topbar.classList.add("ak-topbar--anim-init");

        for (let i = 0; i < navLinkTexts.length; i++) {
          navLinkTexts
            .namedItem(`nav-link-text-${i}`)
            .classList.remove("ak-nav__toolbar__link__text--anim-end");
          navLinkTexts
            .namedItem(`nav-link-text-${i}`)
            .classList.add("ak-nav__toolbar__link__text--anim-init");
        }
      }, 100);
    };

    nav.addEventListener("mouseenter", () => {
      startGrowAnimation();
    });

    nav.addEventListener("mouseleave", () => {
      startShrinkAnimation();
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div className="ak-layout">
        <TopBar />
        <Nav />
        {children}
      </div>
    );
  }
}

export default Layout;
