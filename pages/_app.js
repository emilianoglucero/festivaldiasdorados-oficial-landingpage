//import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { CursorProvider } from "react-cursor-custom";

function MyApp({ Component, pageProps }) {
  return (
    <CursorProvider
      color={"white"}
      noRing={false}
      ringSize={20}
      transitionTime={70}
    >
      <Component {...pageProps} />
    </CursorProvider>
  );
}

export default MyApp;
