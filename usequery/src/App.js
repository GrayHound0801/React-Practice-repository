import { RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
