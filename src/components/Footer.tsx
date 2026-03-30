import React from "react";
import { Row, Text, IconButton, Media } from "@once-ui-system/core";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ThreadsLogoIcon,
} from "@phosphor-icons/react";
import { socialLinks } from "@/resources/data/social";
import { fonts } from "@/resources/once-ui.config";
import { spojtConfig } from "@/resources/spojt.config";

interface FooterProps extends React.ComponentProps<typeof Row> {}

export const Footer: React.FC<FooterProps> = ({ ...flex }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      fillWidth
      horizontal="center"
      borderTop="neutral-alpha-weak"
      s={{ direction: "column" }}
      paddingY={"xs"}
      {...flex}
    >
      <Row
        maxWidth="m"
        paddingX="l"
        gap="16"
        horizontal="between"
        vertical="center"
        id="footer"
      >
        <Text variant="label-default-xs" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text
            paddingX="4"
            style={{ fontFamily: fonts.bitcount.style.fontFamily }}
          >
            Spojt
          </Text>
          <Text onBackground="neutral-weak">/ All rights reserved</Text>
        </Text>
        <Row gap="8" vertical="center" id="socialLinks">
          <Row gap="8">
            {" "}
            {socialLinks.map((link) => (
              <IconButton
                key={link.platform}
                size="s"
                variant="ghost"
                href={link.href}
                icon={link.icon}
              >
                {link.icon === "github" && <GithubLogoIcon />}
                {link.icon === "linkedin" && <LinkedinLogoIcon />}
                {link.icon === "threads" && <ThreadsLogoIcon />}
              </IconButton>
            ))}
          </Row>

          {spojtConfig.utilities.visitorCounter && (
            <div id="visitorCounter">
              {" "}
              <Media
                src="https://vbr.nathanchung.dev/badge?page_id=spojt&&lcolor=151515&color=151515&style=for-the-badge&text=non unique visitors"
                unoptimized
                id="counter"
                dark
              />
              <Media
                src="https://vbr.nathanchung.dev/badge?page_id=spojt&&lcolor=EDEDED&color=EDEDED&style=for-the-badge&text=non unique visitors"
                unoptimized
                id="counter"
                light
              />
            </div>
          )}
        </Row>
      </Row>
    </Row>
  );
};
