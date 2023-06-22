import Layout from "layout";
import TopRated from "pages/topRated";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <TopRated />,
				children: [
					{
						path: "main",
						elememt: <div>main page</div>,
					},
					{
						path: "detail",
						elememt: <div>detail page</div>,
					},
				],
			},
		],
	},
]);

export default router;
