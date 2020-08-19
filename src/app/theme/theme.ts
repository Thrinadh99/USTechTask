
export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
        "--background-default": "#f4faff",
        "--navbar-default": "#08090a",
        "--navbar-text-default": "#fff",
        "--text-default": "#41474d",
        "--footer-default": "#a3b9cc",
        "--button-default": "#800600"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
        "--background-default": "#08090a",
        "--navbar-default": "#f4faff",
        "--navbar-text-default": "#41474d",
        "--text-default": "#fff",
        "--footer-default": "#800600",
        "--button-default": "#a3b9cc"
    }
  };

  export const blue: Theme = {
    name: "blue",
    properties: {
        "--background-default": "#1e90ff",
        "--navbar-default": "#d3d3d3",
        "--navbar-text-default": "#41474d",
        "--text-default": "#fff",
        "--footer-default": "#808080",
        "--button-default": "#ff6347"
    }
  };

  export const red: Theme = {
    name: "red",
    properties: {
        "--background-default": "#ff6347",
        "--navbar-default": "#808080",
        "--navbar-text-default": "#41474d",
        "--text-default": "#fff",
        "--footer-default": "#d3d3d3",
        "--button-default": "#1e90ff"
    }
  };