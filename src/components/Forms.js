import { useState } from "react";
import "./Forms.scss"; 

const inputs = [
    { name: "firstName", placeholder: "First name", type: "text" },
    { name: "lastName", placeholder: "Last name", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "repeatPassword", placeholder: "Confirm password", type: "password" },
];


export default function FormAdvenced() {

    const [formData, setFormData] = useState({});
    const [checkbox, setCheckbox] = useState(false);

    function handleCheckboxChange(e) {
        setCheckbox(e.target.checked);
    }

    function handleFormChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const isFirstNameValid = formData.firstName;
        const isLastNameValid = formData.lastName;
        const isEmailValid = formData.email;
        const isPasswordMatch = formData.password === formData.repeatPassword;
        const isPasswordValid = formData.password && formData.repeatPassword;
        const isCheckboxValid = checkbox;

        if (!isFirstNameValid) alert("error name");
        else if (!isLastNameValid) alert("error LastName");
        else if (!isEmailValid) alert("error email");
        else if (!isPasswordValid) alert("password error");
        else if (!isPasswordMatch) alert("password Confirm");
        else if (!isCheckboxValid) alert("Вы не приняли условия");
        else {
            alert(`
            name: ${isFirstNameValid} ${isLastNameValid}
            email: ${isEmailValid}
            password: ${formData.password}
            accept: ${isCheckboxValid}
            `);
        }


    }
    return (
        <div className={`main`}>
            <h2 className={`form__title`}>Sign up</h2>
            <p className={`form__text`}>please fill in this form to create an accaunt</p>
            <div className={`line`}></div>
            <form onSubmit={handleFormSubmit}>
                {inputs.map(item =>

                    <input
                        className={item.name}
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        key={item.name}
                        value={formData[item.name] || ""}
                        onChange={handleFormChange}
                    />
                )}
                <div className={"checkbox_container"}>
                    <input className={"checkbox"} type="checkbox" onChange={handleCheckboxChange} />
                    <span className={"checkboxText"}>i accepted <a className={"link"}>Terms of Use</a> & <a className={"link"}>Privacy Police</a></span>
                </div>
                <input type="submit" className={"submit"} value={"Sign Up"}/>
            </form>
        </div>
    )
}
