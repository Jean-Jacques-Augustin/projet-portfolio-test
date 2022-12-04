import {Drawer} from "@mui/material";
import {useState} from "react";


export default function CustomDrawer() {
	const [open, setOpen] = useState(false)
	return (
		<Drawer
			open={open}

		>
			<h1>
				Drawer
			</h1>
		</Drawer>
	)
}
