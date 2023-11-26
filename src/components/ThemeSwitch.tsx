import useTheme from "../hooks/useTheme";

import LightIcon from "../assets/icons/light.svg";
import DarkIcon from "../assets/icons/dark.svg";

const ThemeSwitch = () => {
	const {isDarkTheme, changeTheme} = useTheme();

	const icon = isDarkTheme ? DarkIcon : LightIcon;

	return (
		<img src={icon} onClick={changeTheme} width={20} />
	)
}

export default ThemeSwitch;
