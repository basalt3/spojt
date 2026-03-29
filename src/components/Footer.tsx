import React from "react";
import { Row, Text, IconButton } from "@once-ui-system/core";
import { GithubLogoIcon, LinkedinLogoIcon, ThreadsLogoIcon } from "@phosphor-icons/react";
import { socialLinks } from "@/resources/data/social";
import { fonts } from "@/resources/once-ui.config";

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
          <Text paddingX="4" style={{ fontFamily: fonts.bitcount.style.fontFamily }}>
            Spojt
          </Text>
          <Text onBackground="neutral-weak">/ All rights reserved</Text>
        </Text>
        <Row gap="8">
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
      </Row>
    </Row>
  );
};
