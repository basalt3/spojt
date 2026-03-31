"use client";
import { useState } from "react";
import {
  Row,
  Text,
  Flex,
  Mask,
  MatrixFx,
  Button,
  StylePanel,
  IconButton,
  DropdownWrapper,
  StyleOverlay,
} from "@once-ui-system/core";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/resources/constants/links";
import { fonts } from "@/resources/once-ui.config";
import { spojtConfig } from "@/resources/spojt.config";
import { PaletteIcon } from "@phosphor-icons/react";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <Row
      fillWidth
      paddingX={"l"}
      paddingY={"l"}
      fillHeight
      id="heroRow"
      className={className}
    >
      {spojtConfig.utilities.matrixFx && (
        <>
          <Mask
            maxWidth="m"
            x={50}
            y={50}
            radius={41}
            position="absolute"
            id="heroMobileMatrix"
          >
            <MatrixFx
              size={1.5}
              spacing={6}
              fps={90}
              colors={["brand-solid-medium"]}
              flicker
              opacity={80}
            />
          </Mask>

          <Mask
            maxWidth="m"
            x={25}
            y={50}
            radius={34}
            position="absolute"
            id="heroMatrix"
          >
            <MatrixFx
              size={1.9}
              spacing={6}
              fps={90}
              colors={["brand-solid-strong"]}
              flicker
              opacity={80}
            />
          </Mask>
        </>
      )}
      <Flex fillWidth flex={1} center>
        <Text
          variant="display-default-l"
          onBackground="neutral-strong"
          style={{ fontFamily: "var(--font-questrial)" }}
          id="heroTextLeft"
        >
          The <span>new</span> Atomic UI
          <span style={{ fontFamily: fonts.bitcount.style.fontFamily }}>
            {" "}
            Registry
          </span>
          .
        </Text>
      </Flex>
      <Flex
        direction="column"
        fillWidth
        flex={1}
        center
        id="heroRightContainer"
      >
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          className="lh"
          id="heroTextRight"
        >
          A high-contrast, minimalist foundation for building and distributing{" "}
          {spojtConfig.utilities.highlighter ? (
            <Highlighter action="underline" color="var(--brand-solid-strong)">
              design systems
            </Highlighter>
          ) : (
            <span>design systems</span>
          )}
          . Engineered for technical speed and architectural clarity.
        </Text>
        <Row
          vertical="center"
          horizontal="start"
          fillWidth
          gap={"m"}
          id="heroButtons"
        >
          <Button href={links.getStarted}>
            <Text variant="label-default-s">
              <Row gap="xs" center>
                GET STARTED <ArrowUpRightIcon />
              </Row>
            </Text>
          </Button>
          <Button variant="secondary" href={links.learnMore}>
            <Text variant="label-default-s">
              <Row gap="xs" center>
                LEARN MORE <ArrowUpRightIcon />
              </Row>
            </Text>
          </Button>

          <StyleOverlay
            radius="m"
            background="neutral-medium"
            fillHeight
            maxWidth={25}
            data-scaling="90"
            fillWidth
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              right: 0,
              marginInlineEnd: 0,
              width: "100svw",
              height: "100svh",
            }}
          >
            <IconButton variant="secondary">
              {" "}
              <PaletteIcon />
            </IconButton>
          </StyleOverlay>
        </Row>
      </Flex>
    </Row>
  );
};
