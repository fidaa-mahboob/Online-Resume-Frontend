import { siteConfig } from "@/config/site"
import React from "react"
import { button } from "./primitives"


export const ResumeButton = () => {
  return(
      <a href={siteConfig.navMenuItems[1].href}><button type="button" className={button()}>See My Resume</button></a>
  )
}
