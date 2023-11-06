/* eslint-disable react/prop-types */
import React from "react";
import { Container, TextContainer } from "./style";

import { womanLove } from "../../assets/images";
import { Skill } from "../skill/Skill";

export function About({ isDarkTheme }) {
	return (
		<Container
			initial={{ opacity: 0 }}
			whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
			transition={{ duration: 0.5 }}
		>
			<TextContainer>
				<img src={womanLove} />
				<p>
					Hello, I'm Joshua. A software engineer with expertise in web and mobile development.
					I'm deeply passionate about technology and dedicated to delivering robust solutions.
				</p>
			</TextContainer>
			<Skill isDarkTheme={isDarkTheme} />
		</Container>
	);
}
