import {TextField} from "@mui/material";


type textFieldProps = {
	type: "email" | "name" | "password",
	size?: "medium",
	value: string,
	onChange: (e: any) => void,
	label: string

}


export const CustomTextField = ({onChange, size, type, value, label}: textFieldProps) => {
	return (
		<TextField
			fullWidth
			type={type}
			size={size}
			value={value}
			label={label}
		/>
	)
}
