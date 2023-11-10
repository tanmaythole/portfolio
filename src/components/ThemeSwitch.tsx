const ThemeSwitch = () => {
    const changeTheme = () => {
        document.documentElement.setAttribute("color-scheme", "dark");
    };

    return (
        <button onClick={changeTheme}>Switch theme</button>
    )
}

export default ThemeSwitch;
