import { siteConfig } from "@/config/site"
import { ButtonGroupProps } from "@nextui-org/button"
import React from "react"
import { button } from "./primitives"


export const ResumeButton = () => {
  return(
      <a href={siteConfig.navMenuItems[1].href}><button type="button" className={button()}>See My Resume</button></a>
  )
}
