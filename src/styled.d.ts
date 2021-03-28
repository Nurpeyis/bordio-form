// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string;
      black: string;
      dark: string;
      darkBlue: string;
      error: string;
      grey: string;
      info: string;
      lightGrey: string;
      sandGrey: string;
      success: string;
      warning: string;
      white: string;
    };
  }
}
