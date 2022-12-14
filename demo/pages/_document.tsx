import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { stitches } from "stitches.config";

const Body = stitches.styled("body", {
  backgroundColor: "$gray1",
  color: "$gray11",
});

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Radix, CSS" />
        <title>Demo</title>
        <meta name="description" content="Demo" />
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
