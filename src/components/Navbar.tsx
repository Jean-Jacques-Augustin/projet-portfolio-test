import {AppBar, Container, Drawer, Hidden, IconButton, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import "../styles/appbar.css"
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navbarLink = [
	{
		name: "Home",
		path: "/"
	},
	{
		name: "Contact",
		path: "/contact"
	},

	{
		name: "Experience",
		path: "/exp"
	}]

const CustomNavbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<AppBar
			position={"relative"}
		>
			<Container>
				<Toolbar className={"navigation"}>

					<Typography variant={"h5"}>Portfolio</Typography>

					<Hidden smDown>
						<div>
							{
								navbarLink.map((item, key) =>
									<Link className={"links"} to={item.path} key={key}>{item.name}</Link>)
							}
						</div>
					</Hidden>
					<Hidden smUp>
						<IconButton color={"inherit"} onClick={() => setOpen(true)}>
							{
								open ? <CloseIcon/> : <MenuIcon/>
							}
						</IconButton>
					</Hidden>
				</Toolbar>

				<Drawer
					anchor={"left"}
					open={open}
					onClose={() => setOpen(false)}
				>
					<h1>Hello word</h1>
				</Drawer>

			</Container>
		</AppBar>
	)
}

export default CustomNavbar;
