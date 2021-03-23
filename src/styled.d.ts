// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      dark: string;
      darkBlue: string;
      gray: string;
      lightGray: string;
      sandGray: string;
      blue: string;
    };
  }
}
