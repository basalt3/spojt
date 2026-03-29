"use client";

import { Column, Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { spojtConfig } from "@/resources/spojt.config";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Libraries } from "@/components/Libraries";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Column
      fillWidth
      style={{ minHeight: "100svh" }}
      overflow="hidden"
      minWidth={"100vw"}
      paddingX={"xs"}
      center
      background="neutral-medium"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column
        maxWidth="m"
        fillWidth
        fillHeight
        style={{ minHeight: "100svh" }}
        vertical="between"
        id="mainContainer"
      >
        {spojtConfig.components.navbar && <Navbar />}
        {spojtConfig.components.hero && <Hero />}
        <Column fillWidth fitHeight gap={2}>
          {spojtConfig.components.libraries && <Libraries />}
          {spojtConfig.components.footer && <Footer />}
        </Column>
      </Column>
    </Column>
  );
}
