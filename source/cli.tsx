#!/usr/bin/env node
import React from 'react';
import {render, Box, Text} from 'ink';

export function Home() {
	return	(
		<Box flexDirection="column" borderStyle="classic">
			<Box justifyContent="center">
				<Text>
					{'Jiong '}
					<Text bold color="red">Huang</Text>
				</Text>
			</Box>

			<Box
				flexDirection="column"
				borderStyle="round"
				marginLeft={1}
				marginRight={1}
				paddingLeft={1}
				paddingRight={1}
			>
				<Text bold color="red">Education</Text>
				<Box justifyContent="space-between">
					<Text bold>Institue of Information Technology of GUET</Text>
					<Text color="red">Guilin, China</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Software Engineering (Computer Science and Technology)</Text>
					<Text>Jul, 2016</Text>
				</Box>
			</Box>

			<Box
				flexDirection="column"
				borderStyle="round"
				marginLeft={1}
				marginRight={1}
				paddingLeft={1}
				paddingRight={1}
			>
				<Text bold color="red">Work Experience</Text>

				<Box justifyContent="space-between">
					<Text bold>data.ai</Text>
					<Text color="red">Beijing</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Senior Front-End Engineer</Text>
					<Text>Mar, 2021 - Present</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>Beijing Ark Reading Technology Co., Ltd.</Text>
					<Text color="red">Beijing</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Full-Stack Engineer</Text>
					<Text>May, 2020 - Mar, 2021</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>Grab Technology (Beijing) Co., Ltd.</Text>
					<Text color="red">Beijing</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Full-Stack Engineer</Text>
					<Text>Jan, 2018 - May, 2020</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>Legolova (Beijing) Technology Co., Ltd.</Text>
					<Text color="red">Beijing</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Node.js & PHP Engineer</Text>
					<Text>Aug, 2016 - Sep, 2017</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>Huanlv International Information Technology (Beijing) Co., Ltd.</Text>
					<Text color="red">Beijing</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>PHP Engineer</Text>
					<Text>Feb, 2016 - Jul, 2016</Text>
				</Box>
			</Box>

			<Box
				flexDirection="column"
				borderStyle="round"
				marginLeft={1}
				marginRight={1}
				paddingLeft={1}
				paddingRight={1}
			>
				<Text bold color="red">Projects</Text>

				<Box justifyContent="space-between">
					<Text bold>LitoMore/litomore-cli</Text>
					<Text color="cyan">TypeScript, React, CLI</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Project for this resume</Text>
					<Text>Owner</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>SBoudrias/Inquirer.js</Text>
					<Text color="cyan">JavaScript, CLI</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>A collection of common interactive command line user interfaces</Text>
					<Text>Collaborator</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>simple-icons/simple-icons</Text>
					<Text color="cyan">JavaScript</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>SVG icon for popular brands</Text>
					<Text>Member</Text>
				</Box>

				<Box justifyContent="space-between" marginTop={1}>
					<Text bold>netless-io/flat</Text>
					<Text color="cyan">TypeScript, Electron</Text>
				</Box>
				<Box justifyContent="space-between">
					<Text>Open-source classroom app built with Electron</Text>
					<Text>Member</Text>
				</Box>
			</Box>
		</Box>
	);
}

render(<Home/>);
