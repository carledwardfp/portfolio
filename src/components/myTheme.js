import { createMuiTheme } from '@material-ui/core/styles'

const myTheme = createMuiTheme({
    palette: {
		common:{ 
			black: "#000","white":"#fff"
		},
		background: { 
			paper: "#fff","default":"#fafafa"
		},
		primary: { 
			light: "#484848",
			main: "#212121",
			dark: "#000000",
			contrastText: "#fff"
		},
		secondary: {
			light: "#8bf6ff",
			main: "#4fc3f7",
			dark: "#0093c4",
			contrastText: "#fff"
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff"
		},
		text: {
			primary: "#fff",
			secondary: "#fff",
			disabled: "#c7c7c7",
			hint: "rgba(0, 0, 0, 0.38)"
        },
	}
});

export default myTheme
