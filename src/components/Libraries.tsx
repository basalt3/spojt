import React from "react";
import { Flex, Row, Logo, Fade, AutoScroll, Text } from "@once-ui-system/core";
import { libraries } from "@/resources/data/libraries";
import { spojtConfig } from "@/resources/spojt.config";

interface LibrariesProps {
  className?: string;
}

export const Libraries: React.FC<LibrariesProps> = ({ className }) => {
  return (
    <Flex
      direction="row"
      fillWidth
      center
      paddingX={"l"}
      paddingY={"m"}
      id="librariesRow"
      className={className}
    >
      <Flex center maxWidth={8} id="librariesTextLeft">
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Built using awesome libraries and stacks:
        </Text>
      </Flex>
      <Row fillWidth overflow="hidden">
        <Fade
          zIndex="1"
          to="right"
          fillHeight
          width="64"
          position="absolute"
          left="0"
          base="transparent"
          top="0"
        />
        <AutoScroll
          center
          speed={spojtConfig.utilities.autoScroll ? "fast" : "slow"}
          opacity={70}
          id="autoScroll"
          overflow="hidden"
        >
          {libraries.map((library, index) => (
            <React.Fragment key={index}>
              <Logo
                wordmark={library.wordmark}
                size={library.size}
                href={library.href}
                light
                className="grayscale invert"
                style={library.style}
              />
              <Logo
                wordmark={library.wordmark}
                size={library.size}
                href={library.href}
                dark
                className="grayscale invert"
                style={library.style}
              />
            </React.Fragment>
          ))}
        </AutoScroll>
        <Fade
          zIndex="1"
          to="left"
          fillHeight
          width="64"
          position="absolute"
          right="0"
          top="0"
          base="transparent"
        />
      </Row>
    </Flex>
  );
};
