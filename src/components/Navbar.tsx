import {
  Row,
  Text,
  Media,
  SmartLink,
  ThemeSwitcher,
  Button,
  NavIcon,
} from "@once-ui-system/core";
import { navigationLinks } from "@/resources/data/navigation";
import { links } from "@/resources/constants/links";
import { fonts } from "@/resources/once-ui.config";
import { spojtConfig } from "@/resources/spojt.config";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <Row
      fillWidth
      paddingX={"l"}
      horizontal="between"
      vertical="center"
      paddingY={1}
      className={className}
    >
      <Row center gap="m">
        <Row center gap="s">
          <Media src="/logo.svg" alt="Spojt" width={1.5} height={1.5} light />
          <Media
            src="/logo.svg"
            alt="Spojt"
            width={1.5}
            height={1.5}
            dark
            className="invertMax"
          />
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <span style={{ fontFamily: fonts.bitcount.style.fontFamily }}>
              Spojt
            </span>
          </Text>
        </Row>
        {spojtConfig.utilities.navLinks && (
        <Row center gap="m" id="navLinks">
          {navigationLinks.map((link) => (
            <SmartLink key={link.label} href={link.href}>
              <Text variant="code-default-xs">
                <b>{link.label}</b>
              </Text>
            </SmartLink>
          ))}
        </Row>
        )}
      </Row>
      <Row center gap={"m"} id="navButtonsContainer">
        {spojtConfig.utilities.themeSwitcher && (
          <ThemeSwitcher id="themeSwitcher" />
        )}
        <Button
          variant="secondary"
          size="s"
          id="navButton"
          href={links.basalt3}
        >
          <Text variant="label-default-s">
            <Row gap="0" center>
              <Media
                src="/trademarks/b3.png"
                alt="BASALT3"
                width={1.5}
                height={1.5}
                light
              />
              <Media
                src="/trademarks/b3.png"
                alt="BASALT3"
                width={1.5}
                height={1.5}
                dark
                className="invertMax"
              />
              BASALT3&nbsp;&nbsp;
            </Row>
          </Text>
        </Button>
        <Button size="s" id="navButton" href={links.getStarted}>
          <Text variant="label-default-s">
            <Row gap="xs" center>
              GET STARTED
            </Row>
          </Text>
        </Button>
        <NavIcon id="navIcon" />
      </Row>
    </Row>
  );
};
