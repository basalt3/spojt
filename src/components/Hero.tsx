import { Row, Text, Flex, Mask, MatrixFx, Button } from "@once-ui-system/core";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/resources/constants/links";
import { fonts } from "@/resources/once-ui.config";
import { spojtConfig } from "@/resources/spojt.config";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <Row
      fillWidth
      paddingX={"l"}
      paddingY={"l"}
      fillHeight
      id="heroRow"
      className={className}
    >
      <Flex fillWidth flex={1} center>
        {spojtConfig.utilities.matrixFx && (
          <Mask maxWidth="m" x={50} y={50} radius={41} position="absolute">
            <MatrixFx
              size={1.5}
              spacing={6}
              fps={90}
              colors={["brand-solid-medium"]}
              flicker
              opacity={80}
            />
          </Mask>
        )}
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
            <Highlighter action="underline" color="#FF9800">
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
        </Row>
      </Flex>
    </Row>
  );
};
