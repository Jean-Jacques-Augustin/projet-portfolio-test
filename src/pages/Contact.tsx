import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {CustomTextField} from "../components/Form";
import React, {useState} from "react";


export default function Contact() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div>
			<Typography>Me contacter</Typography>
			<Paper
				sx={{
					m: 2, p: 2, display: "flex"
				}}
			>
				<Grid
					container
					direction={"row"}
					spacing={2}
					margin={2}
				>
					<Grid item md={12}>
						<CustomTextField type={"email"} value={email} onChange={e => setEmail(e.target.value)}
						                 label={"Adresse e-mail"}/>
					</Grid>
					<Grid item md={12}>
						<TextField
							fullWidth
							multiline
							value={message}
							rows={5}
							type={"text"}
							onChange={e => setMessage(e.target.value)}
							label={"Votre message ..."}
						/>
					</Grid>
					<Grid item>
						<Button fullWidth>
							Envoyer
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}
