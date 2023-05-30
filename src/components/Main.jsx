import React, { useContext, useState } from "react";
import "../styles/Main.css";
import person from "../assets/images/layer_1_2.png";
import logo from "../assets/images/WebEngage-logo-1.png";
import arrow from "../assets/images/4829869_arrow_next_right__4.png";
import background from "../assets/images/vector_smart_object_9.png";
import PhoneInput, {
	formatPhoneNumber,
	formatPhoneNumberIntl,
	isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { UserContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
const Main = () => {
	const [inputValue, setInputValue] = useState();
	const [user, setUser] = useContext(UserContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

    const onSubmit = (data) => {
		setUser([email, data["phone-input"]]);
		navigate("/thanksgiving", { replace: true });
		console.log(data["phone-input"]);
	};
	return (
		<div className="main">
			<div className="content">
				<div className="figure">
					<img
						className="back"
						src={background}
					/>
					<img
						className="person"
						src={person}
					/>
				</div>
				<div className="data">
					<img
						src={logo}
						className="logo"
					/>
					<h2 className="free">Get a FREE</h2>
					<h2 className="consult">consultation with an expert</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							placeholder="Enter your email"
							required={true}
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<span className="phonespan">
							{/* <PhoneInput
								placeholder="Enter phone number"
								defaultCountry="IN"
								value={inputValue}
								onChange={setInputValue}
								maxLength={11}
								required={true}
								border="none"
								limitMaxLength={10}
								error={
									inputValue
										? isValidPhoneNumber(inputValue)
											? undefined
											: "Invalid phone number"
										: "Phone number required"
								}
							/>
							Is valid: {value && isValidPhoneNumber(value) ? "true" : "false"} */}
							<Controller
								name="phone-input"
								control={control}
								rules={{
									required: true,
									validate: (inputValue) => isValidPhoneNumber(inputValue),
								}}
								render={({ field: { onChange, inputValue } }) => (
									<PhoneInput
										placeholder="Enter phone number"
										value={inputValue}
										onChange={onChange}
										defaultCountry="IN"
										id="phone-input"
									/>
								)}
							/>
							{errors["phone-input"] && (
								<p className="error-message">Invalid Phone</p>
							)}
						</span>
						<button type="submit">
							TALK TO US
							<img
								className="arrow"
								src={arrow}
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Main;
