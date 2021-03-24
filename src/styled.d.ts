// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      dark: string;
      darkBlue: string;
      grey: string;
      lightGrey: string;
      sandGrey: string;
      blue: string;
    };
  }
}
