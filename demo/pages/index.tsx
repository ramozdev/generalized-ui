import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Accordion } from "@diegoramos/generalized-ui";
import { stitches } from "stitches.config";
import * as styles from "styles/Accordion";

const { GeneralizedAccordion } = Accordion(stitches, styles);

const items = [
  {
    itemProps: {
      value: "item-1",
    },
    trigger: { children: "Is it accessible?" },
    content: {
      children: "Yes. It adheres to the WAI-ARAI design pattern.",
    },
  },
  {
    itemProps: {
      value: "item-2",
    },
    trigger: { children: "Is it unstyled?" },
    content: {
      children: `Yes. It's unstyled by default, giving you freedom over the look and feel.`,
    },
  },
  {
    itemProps: {
      value: "item-3",
    },
    trigger: { children: "Can it be animated?" },
    content: {
      children: "Yes! You can animate the Accordion with CSS or JavaScript.",
    },
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GeneralizedAccordion
        type="single"
        defaultValue="item-1"
        collapsible
        items={items}
      />
    </div>
  );
};

export default Home;
