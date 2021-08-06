import {
  Code,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";

const links = [
  { href: "https://chakra-ui.com", text: "Chakra UI" },
  { href: "https://nextjs.org", text: "Next.js" },
];

const Home: React.FC = () => (
  <Container>
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
        <Code>typescript</Code>
      </Text>

      <List spacing={3} my={0}>
        {links.map((link) => (
          <ListItem key={link.href}>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href={link.href} flexGrow={1} mr={2}>
              {link.text} <LinkIcon />
            </ChakraLink>
          </ListItem>
        ))}
      </List>
    </Main>

    <DarkModeSwitch />

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Home;
