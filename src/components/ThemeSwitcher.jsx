function ThemeSwitcher() {
    return (
        <>
            <div className="switch_box box_3">
                <div className="toggle_switch">
                    <input type="checkbox" className="switch_3" onClick={() => { document.body.classList.toggle("dark") }} />
                    <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate" }} viewBox="0 0 168 80">
                        <path className="is_checked"
                            d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z" />
                        <path className="is_unchecked"
                            d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ThemeSwitcher;